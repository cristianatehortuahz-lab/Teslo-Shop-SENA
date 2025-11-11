'use client';

import { changeUserRole } from '@/actions';
import type { User } from '@/interfaces';

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {

  const getRoleBadge = (role: string) => {
    if (role === 'admin') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Admin
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        User
      </span>
    );
  };

  return (
    <table className="min-w-full bg-white rounded-lg overflow-hidden">
      <thead className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300">
        <tr>
          <th
            scope="col"
            className="text-sm font-semibold text-gray-700 px-6 py-4 text-left uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="text-sm font-semibold text-gray-700 px-6 py-4 text-left uppercase tracking-wider"
          >
            Nombre completo
          </th>
          <th
            scope="col"
            className="text-sm font-semibold text-gray-700 px-6 py-4 text-left uppercase tracking-wider"
          >
            Role Actual
          </th>
          <th
            scope="col"
            className="text-sm font-semibold text-gray-700 px-6 py-4 text-left uppercase tracking-wider"
          >
            Cambiar Role
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {users.map((user) => (
          <tr
            key={user.id}
            className="hover:bg-gray-50 transition-colors duration-150"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">{ user.email }</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{ user.name }</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {getRoleBadge(user.role)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select 
                value={ user.role }
                onChange={ e =>  changeUserRole( user.id, e.target.value) }
                className="text-sm p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
