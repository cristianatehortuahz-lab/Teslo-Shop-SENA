'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ({ product }: Props) => {

  const [displayImage, setDisplayImage] = useState(product.images[0]);


  return (
    <div className="rounded-none overflow-hidden fade-in group relative">
      <Link href={`/product/${product.slug}`}>
        <div className="overflow-hidden relative">
          <Image
            src={`/products/${displayImage}`}
            alt={product.title}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={500}
            height={500}
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
          />
          {/* Quick Add Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center">
            <span className="uppercase font-bold text-xs tracking-widest">Ver Detalles</span>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col items-center text-center">
        <Link
          className="hover:text-accent transition-colors uppercase font-medium tracking-wide text-sm"
          href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold text-lg mt-2">${product.price}</span>
      </div>

    </div>
  );
};