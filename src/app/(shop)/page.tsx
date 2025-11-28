export const revalidate = 60; // 60 segundos


import { redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Testimonials, Title } from '@/components';
import { Hero } from '@/components/ui/hero/Hero';
import { titleFont } from '@/config/fonts';



interface Props {
  searchParams: {
    page?: string;
  }
}


export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });


  if (products.length === 0) {
    redirect('/');
  }


  return (
    <div className="flex flex-col w-full">

      <Hero />

      <div className="px-4 md:px-10 py-20">
        <div className="mb-10 text-center">
          <h3 className={`${titleFont.className} text-4xl md:text-5xl font-bold uppercase tracking-tighter`}>
            Trending Now
          </h3>
          <p className="text-gray-500 mt-2 uppercase tracking-widest text-sm">
            Los favoritos de la temporada
          </p>
        </div>

        <ProductGrid
          products={products}
        />

        <div className="mt-20">
          <Testimonials />
        </div>

        <div className="mt-10">
          <Pagination totalPages={totalPages} />
        </div>
      </div>

    </div>
  );
}
