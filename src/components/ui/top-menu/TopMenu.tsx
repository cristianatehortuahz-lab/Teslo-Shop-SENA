"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])



  return (
    <nav className="flex px-8 py-4 justify-between items-center w-full glass-effect fixed top-0 z-50 transition-all">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold text-2xl tracking-tighter`}>
            NOVA
          </span>
          <span className="font-bold text-xl tracking-widest ml-1">SHOP</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-none transition-all hover:bg-black hover:text-white font-medium uppercase tracking-widest text-sm"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-none transition-all hover:bg-black hover:text-white font-medium uppercase tracking-widest text-sm"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-none transition-all hover:bg-black hover:text-white font-medium uppercase tracking-widest text-sm"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={openSideMenu}
          className="hover:bg-gray-100 p-2 rounded-none transition-all"
          title="Buscar"
        >
          <IoSearchOutline className="w-6 h-6" />
        </button>

        <Link href={
          ((totalItemsInCart === 0) && loaded)
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {(loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-[10px] px-1.5 py-0.5 font-bold -top-2 -right-2 bg-accent text-white rounded-none">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="p-2 rounded-none transition-all hover:bg-black hover:text-white font-medium uppercase tracking-widest text-sm"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
