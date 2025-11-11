import { auth } from '@/auth.config';
import { Title } from '@/components';
import { redirect } from 'next/navigation';
import { IoCartOutline, IoPeopleOutline, IoShirtOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AdminStats } from './ui/AdminStats';

export default async function AdminPage() {
  
  const session = await auth();

  if (session?.user.role !== 'admin') {
    redirect('/');
  }

  return (
    <>
      <Title title="Panel de Control" />

      <div className="mb-10">
        <AdminStats />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card: Productos */}
          <Link 
            href="/admin/products"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Gestión de</p>
                <h3 className="text-2xl font-bold text-gray-800">Productos</h3>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <IoShirtOutline className="text-blue-600 text-3xl" />
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Crear, editar y eliminar productos del catálogo
            </p>
          </Link>

          {/* Card: Órdenes */}
          <Link 
            href="/admin/orders"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-green-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Gestión de</p>
                <h3 className="text-2xl font-bold text-gray-800">Órdenes</h3>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <IoCartOutline className="text-green-600 text-3xl" />
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Ver y gestionar todas las órdenes de compra
            </p>
          </Link>

          {/* Card: Usuarios */}
          <Link 
            href="/admin/users"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-purple-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Gestión de</p>
                <h3 className="text-2xl font-bold text-gray-800">Usuarios</h3>
              </div>
              <div className="bg-purple-100 p-4 rounded-full">
                <IoPeopleOutline className="text-purple-600 text-3xl" />
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Administrar usuarios y cambiar roles
            </p>
          </Link>
        </div>

        {/* Información adicional */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Panel de Administración Completo</strong> - Control total sobre productos, órdenes y usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}