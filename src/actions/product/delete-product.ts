'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const deleteProduct = async (productId: string) => {

    const session = await auth();

    if (session?.user.role !== 'admin') {
        return {
            ok: false,
            message: 'No tienes permisos para eliminar productos'
        };
    }

    try {
        // 1. Obtener producto con sus imágenes y verificar si tiene órdenes
        const product = await prisma.product.findUnique({
            where: { id: productId },
            include: {
                ProductImage: true,
                OrderItem: {
                    select: { id: true }
                }
            }
        });

        if (!product) {
            return {
                ok: false,
                message: 'Producto no encontrado'
            };
        }

        // 2. Verificar si tiene órdenes asociadas
        if (product.OrderItem && product.OrderItem.length > 0) {
            return {
                ok: false,
                message: `No se puede eliminar este producto porque tiene ${product.OrderItem.length} orden(es) asociada(s). Por seguridad, los productos con historial de ventas no pueden eliminarse.`
            };
        }

        // 3. Eliminar imágenes de Cloudinary
        const imagesToDelete = product.ProductImage.map(image => image.url);

        for (const imageUrl of imagesToDelete) {
            if (imageUrl.startsWith('http')) {
                const imageName = imageUrl.split('/').pop()?.split('.')[0] ?? '';
                try {
                    await cloudinary.uploader.destroy(imageName);
                } catch (error) {
                    console.log('Error eliminando imagen de Cloudinary:', error);
                }
            }
        }

        // 4. Eliminar imágenes de la base de datos PRIMERO
        await prisma.productImage.deleteMany({
            where: { productId: product.id }
        });

        // 5. Eliminar el producto
        await prisma.product.delete({
            where: { id: productId }
        });

        // 6. Revalidar la página
        revalidatePath('/admin/products');
        revalidatePath('/');
        revalidatePath(`/product/${product.slug}`);

        return {
            ok: true,
            message: 'Producto eliminado correctamente'
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error inesperado al eliminar el producto. Verifica los logs del servidor.'
        };
    }

};

