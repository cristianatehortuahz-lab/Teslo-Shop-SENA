import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import {
  IoPersonOutline,
  IoMailOutline,
  IoShieldCheckmarkOutline,
  IoCartOutline,
  IoLocationOutline,
  IoTimeOutline
} from "react-icons/io5";
import Link from "next/link";
import { getOrdersByUser } from "@/actions";
import { getUserAddress } from "@/actions";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  // Obtener órdenes del usuario
  const { ok, orders = [] } = await getOrdersByUser();

  // Obtener dirección del usuario
  const userAddress = await getUserAddress(session.user.id);

  // Calcular estadísticas
  const totalOrders = orders.length;
  const paidOrders = orders.filter(order => order.isPaid).length;
  const pendingOrders = totalOrders - paidOrders;
  const totalSpent = orders
    .filter(order => order.isPaid)
    .reduce((sum, order) => sum + order.total, 0);

  const roleLabel = session.user.role === 'admin' ? 'Administrador' : 'Usuario';
  const roleColor = session.user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800';

  return (
    <>
      <Title title="Mi Perfil" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Información Personal */}
        <div className="md:col-span-2 bg-white rounded-none shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Información Personal</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${roleColor}`}>
              {roleLabel}
            </span>
          </div>

          <div className="space-y-4">
            {/* Nombre */}
            <div className="flex items-center p-4 bg-gray-50 rounded-none">
              <IoPersonOutline className="text-2xl text-gray-600 mr-4" />
              <div>
                <p className="text-sm text-gray-500">Nombre completo</p>
                <p className="font-semibold text-gray-800">{session.user.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <IoMailOutline className="text-2xl text-gray-600 mr-4" />
              <div>
                <p className="text-sm text-gray-500">Correo electrónico</p>
                <p className="font-semibold text-gray-800">{session.user.email}</p>
              </div>
            </div>

            {/* Rol */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <IoShieldCheckmarkOutline className="text-2xl text-gray-600 mr-4" />
              <div>
                <p className="text-sm text-gray-500">Rol en el sistema</p>
                <p className="font-semibold text-gray-800">{roleLabel}</p>
              </div>
            </div>

            {/* ID de Usuario */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <IoTimeOutline className="text-2xl text-gray-600 mr-4" />
              <div>
                <p className="text-sm text-gray-500">ID de Usuario</p>
                <p className="font-mono text-xs text-gray-600">{session.user.id}</p>
              </div>
            </div>
          </div>

          {/* Panel de admin si es admin */}
          {session.user.role === 'admin' && (
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
              <div className="flex items-center">
                <IoShieldCheckmarkOutline className="text-2xl text-purple-600 mr-3" />
                <div>
                  <p className="font-semibold text-purple-900">Acceso de Administrador</p>
                  <p className="text-sm text-purple-700">
                    Tienes privilegios de administrador.{' '}
                    <Link href="/admin" className="underline font-semibold hover:text-purple-900">
                      Ir al panel de administración →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Estadísticas de Compras */}
        <div className="space-y-6">
          {/* Total de Órdenes */}
          <div className="bg-black rounded-none shadow-md p-6 text-white border-l-4 border-accent">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total de Órdenes</p>
                <p className="text-3xl font-bold mt-1">{totalOrders}</p>
              </div>
              <IoCartOutline className="text-5xl text-blue-200" />
            </div>
          </div>

          {/* Órdenes Pagadas */}
          <div className="bg-black rounded-none shadow-md p-6 text-white border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Órdenes Pagadas</p>
                <p className="text-3xl font-bold mt-1">{paidOrders}</p>
              </div>
              <IoShieldCheckmarkOutline className="text-5xl text-green-200" />
            </div>
          </div>

          {/* Órdenes Pendientes */}
          <div className="bg-black rounded-none shadow-md p-6 text-white border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Pendientes</p>
                <p className="text-3xl font-bold mt-1">{pendingOrders}</p>
              </div>
              <IoTimeOutline className="text-5xl text-orange-200" />
            </div>
          </div>

          {/* Total Gastado */}
          <div className="bg-black rounded-none shadow-md p-6 text-white border-l-4 border-purple-500">
            <div>
              <p className="text-purple-100 text-sm">Total Gastado</p>
              <p className="text-3xl font-bold mt-1">
                ${totalSpent.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dirección Guardada */}
      <div className="mb-10">
        <div className="bg-white rounded-none shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <IoLocationOutline className="mr-2" />
              Dirección de Envío
            </h2>
            <Link
              href="/checkout/address"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Editar →
            </Link>
          </div>

          {userAddress ? (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Nombre</p>
                <p className="font-semibold text-gray-800">
                  {userAddress.firstName} {userAddress.lastName}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                <p className="font-semibold text-gray-800">{userAddress.phone}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Dirección</p>
                <p className="font-semibold text-gray-800">{userAddress.address}</p>
                {userAddress.address2 && (
                  <p className="text-gray-600">{userAddress.address2}</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Ciudad / Código Postal</p>
                <p className="font-semibold text-gray-800">
                  {userAddress.city}, {userAddress.postalCode}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">País</p>
                <p className="font-semibold text-gray-800">{userAddress.country}</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <IoLocationOutline className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No has guardado ninguna dirección aún</p>
              <Link
                href="/checkout/address"
                className="btn-primary inline-block"
              >
                Agregar Dirección
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Órdenes Recientes */}
      <div className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <IoCartOutline className="mr-2" />
              Órdenes Recientes
            </h2>
            <Link
              href="/orders"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Ver todas →
            </Link>
          </div>

          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-black border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-white">
                      Orden
                    </th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                      Fecha
                    </th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                      Total
                    </th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                      Estado
                    </th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-mono text-gray-600">
                        #{order.id.split('-').at(-1)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString('es-ES')}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-800">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {order.isPaid ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            Pagada
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                            Pendiente
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <Link
                          href={`/orders/${order.id}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Ver detalles
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <IoCartOutline className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No has realizado ninguna orden aún</p>
              <Link
                href="/"
                className="btn-primary inline-block"
              >
                Explorar Productos
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/orders"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
        >
          <IoCartOutline className="text-3xl text-blue-600 mb-2" />
          <h3 className="font-bold text-gray-800 mb-1">Mis Órdenes</h3>
          <p className="text-sm text-gray-600">Ver historial completo de compras</p>
        </Link>

        <Link
          href="/checkout/address"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500"
        >
          <IoLocationOutline className="text-3xl text-green-600 mb-2" />
          <h3 className="font-bold text-gray-800 mb-1">Mi Dirección</h3>
          <p className="text-sm text-gray-600">Actualizar dirección de envío</p>
        </Link>

        <Link
          href="/"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500"
        >
          <IoCartOutline className="text-3xl text-purple-600 mb-2" />
          <h3 className="font-bold text-gray-800 mb-1">Seguir Comprando</h3>
          <p className="text-sm text-gray-600">Explorar catálogo de productos</p>
        </Link>
      </div>
    </>
  );
}
