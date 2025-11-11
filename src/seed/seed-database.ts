import prisma from '../lib/prisma';
import { Size } from '@prisma/client';
import { initialData } from './seed';
import { countries } from './seed-countries';
import { escuelajsProducts } from './escuelajs-products';



async function main() {

  // 1. Borrar registros previos
  // await Promise.all( [

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();


  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);
  
  const { categories, products, users } = initialData;
  const mergedProducts = [
    ...products,
    ...escuelajsProducts
  ];


  await prisma.user.createMany({
    data: users
  });

  await prisma.country.createMany({
    data: countries
  });



  //  Categorias
  // {
  //   name: 'Shirt'
  // }
  const categoriesData = categories.map( (name) => ({ name }));
  
  await prisma.category.createMany({
    data: categoriesData
  });

  
  const categoriesDB = await prisma.category.findMany();
  
  const categoriesMap = categoriesDB.reduce( (map, category) => {
    map[ category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>
  
  

  // Productos

  mergedProducts.forEach( async(product) => {

    const { type, images, ...rest } = product as any;
    const { sizes, tags, ...restWithoutLists } = rest;

    const dbProduct = await prisma.product.create({
      data: {
        ...restWithoutLists,
        sizes: {
          set: (sizes as Size[])
        },
        tags: {
          set: (tags as string[])
        },
        categoryId: categoriesMap[type]
      }
    })


    // Images
    const imagesData = images.map( (image: string) => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });

  });





  console.log( 'Seed ejecutado correctamente' );
}









( () => {

  if ( process.env.NODE_ENV === 'production' ) return;


  main();
} )();