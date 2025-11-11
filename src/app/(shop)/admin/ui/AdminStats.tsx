import prisma from '@/lib/prisma';
import { IoTrendingUpOutline, IoAlertCircleOutline, IoPeopleOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

async function getAdminStats() {
  try {
    const [
      totalProducts,
      lowStockProducts,
      totalUsers,
      adminUsers
    ] = await Promise.all([
      prisma.product.count(),
      prisma.product.count({ where: { inStock: { lte: 10 } } }),
      prisma.user.count(),
      prisma.user.count({ where: { role: 'admin' } })
    ]);

    return {
      totalProducts,
      lowStockProducts,
      totalUsers,
      adminUsers,
      regularUsers: totalUsers - adminUsers
    };
  } catch (error) {
    return null;
  }
}

export async function AdminStats() {
  const stats = await getAdminStats();

  if (!stats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Total Productos */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-600 text-xs font-medium uppercase tracking-wide">Total Productos</p>
            <p className="text-3xl font-bold text-blue-900 mt-1">{stats.totalProducts}</p>
          </div>
          <div className="bg-blue-500 p-3 rounded-full">
            <IoTrendingUpOutline className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Stock Bajo */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-5 border border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-600 text-xs font-medium uppercase tracking-wide">Stock Bajo</p>
            <p className="text-3xl font-bold text-orange-900 mt-1">{stats.lowStockProducts}</p>
            <p className="text-orange-600 text-xs mt-1">≤ 10 unidades</p>
          </div>
          <div className="bg-orange-500 p-3 rounded-full">
            <IoAlertCircleOutline className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Total Usuarios */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-600 text-xs font-medium uppercase tracking-wide">Total Usuarios</p>
            <p className="text-3xl font-bold text-purple-900 mt-1">{stats.totalUsers}</p>
            <p className="text-purple-600 text-xs mt-1">{stats.regularUsers} usuarios</p>
          </div>
          <div className="bg-purple-500 p-3 rounded-full">
            <IoPeopleOutline className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Administradores */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-600 text-xs font-medium uppercase tracking-wide">Admins</p>
            <p className="text-3xl font-bold text-green-900 mt-1">{stats.adminUsers}</p>
            <p className="text-green-600 text-xs mt-1">administradores</p>
          </div>
          <div className="bg-green-500 p-3 rounded-full">
            <IoShieldCheckmarkOutline className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
