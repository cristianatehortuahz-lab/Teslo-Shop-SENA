"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import { logout } from "@/actions";

export const Sidebar = () => {
  const router = useRouter();
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      closeMenu();
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-black z-20 shadow-2xl transform transition-all duration-300 text-white",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-white hover:text-gray-300 transition-colors"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <form onSubmit={handleSearch} className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2 text-gray-400" />
          <input
            type="text"
            placeholder="BUSCAR..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900 rounded-none pl-10 py-2 pr-10 border-b border-gray-700 text-xl text-white focus:outline-none focus:border-white placeholder:text-gray-600 uppercase tracking-widest"
          />
        </form>

        {/* Quick navigation */}
        <div className="mt-10 space-y-4">
          <Link
            href="/"
            onClick={() => closeMenu()}
            className="flex items-center p-2 hover:bg-gray-900 rounded-none transition-all text-lg font-bold uppercase tracking-widest"
          >
            <span>Todos</span>
          </Link>
          <Link
            href="/gender/men"
            onClick={() => closeMenu()}
            className="flex items-center p-2 hover:bg-gray-900 rounded-none transition-all text-lg font-bold uppercase tracking-widest"
          >
            <span>Hombres</span>
          </Link>
          <Link
            href="/gender/women"
            onClick={() => closeMenu()}
            className="flex items-center p-2 hover:bg-gray-900 rounded-none transition-all text-lg font-bold uppercase tracking-widest"
          >
            <span>Mujeres</span>
          </Link>
          <Link
            href="/gender/kid"
            onClick={() => closeMenu()}
            className="flex items-center p-2 hover:bg-gray-900 rounded-none transition-all text-lg font-bold uppercase tracking-widest"
          >
            <span>Niños</span>
          </Link>
        </div>

        <div className="w-full h-px bg-gray-800 my-8" />

        {/* Menú */}

        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={() => closeMenu()}
              className="flex items-center mt-6 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            >
              <IoPersonOutline size={24} />
              <span className="ml-3 text-lg uppercase tracking-wider">Perfil</span>
            </Link>

            <Link
              href="/orders"
              onClick={() => closeMenu()}
              className="flex items-center mt-6 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            >
              <IoTicketOutline size={24} />
              <span className="ml-3 text-lg uppercase tracking-wider">Ordenes</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            className="flex w-full items-center mt-6 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            onClick={() => logout()}
          >
            <IoLogOutOutline size={24} />
            <span className="ml-3 text-lg uppercase tracking-wider">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center mt-6 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={24} />
            <span className="ml-3 text-lg uppercase tracking-wider">Ingresar</span>
          </Link>
        )}

        {isAdmin && (
          <>
            {/* Line Separator */}
            <div className="w-full h-px bg-gray-800 my-8" />

            <div className="px-2 mb-4 text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Admin Panel</div>

            <Link
              href="/admin/products"
              onClick={() => closeMenu()}
              className="flex items-center mt-2 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            >
              <IoShirtOutline size={24} />
              <span className="ml-3 text-lg uppercase tracking-wider">Productos</span>
            </Link>

            <Link
              href="/admin/orders"
              onClick={() => closeMenu()}
              className="flex items-center mt-4 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            >
              <IoTicketOutline size={24} />
              <span className="ml-3 text-lg uppercase tracking-wider">Ordenes</span>
            </Link>

            <Link
              href="/admin/users"
              onClick={() => closeMenu()}
              className="flex items-center mt-4 p-2 hover:bg-gray-900 rounded-none transition-all text-gray-300 hover:text-white"
            >
              <IoPeopleOutline size={24} />
              <span className="ml-3 text-lg uppercase tracking-wider">Usuarios</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
