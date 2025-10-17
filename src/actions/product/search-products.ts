'use server';

import prisma from '@/lib/prisma';
import { Gender } from '@prisma/client';

interface PaginationOptions {
  page?: number;
  take?: number;
  query: string;
}

export const searchProducts = async ({
  page = 1,
  take = 12,
  query,
}: PaginationOptions) => {
  if (page < 1) page = 1;
  
  // Si no hay query, retornar vacío
  if (!query || query.trim().length === 0) {
    return {
      currentPage: page,
      totalPages: 0,
      products: [],
    };
  }

  try {
    // Buscar productos que coincidan en título, descripción o tags
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            tags: {
              has: query.toLowerCase(),
            },
          },
        ],
      },
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    // Contar total de productos que coinciden
    const totalCount = await prisma.product.count({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            tags: {
              has: query.toLowerCase(),
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    console.error('Error searching products:', error);
    throw new Error('No se pudo buscar los productos');
  }
};
