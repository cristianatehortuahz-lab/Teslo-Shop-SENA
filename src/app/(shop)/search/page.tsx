export const revalidate = 60;

import { redirect } from 'next/navigation';
import { searchProducts } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

interface Props {
  searchParams: {
    q?: string;
    page?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || '';
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // Si no hay query, redirigir a home
  if (!query.trim()) {
    redirect('/');
  }

  const { products, currentPage, totalPages } = await searchProducts({
    page,
    query,
  });

  return (
    <>
      <Title
        title={`Resultados de búsqueda`}
        subtitle={`"${query}" - ${products.length} ${products.length === 1 ? 'producto encontrado' : 'productos encontrados'}`}
        className="mb-2"
      />

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-700 mb-2">
              No se encontraron productos
            </p>
            <p className="text-gray-500 mb-6">
              Intenta con otros términos de búsqueda
            </p>
            <a
              href="/"
              className="btn-primary inline-block"
            >
              Ver todos los productos
            </a>
          </div>
        </div>
      ) : (
        <>
          <ProductGrid products={products} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </>
  );
}
