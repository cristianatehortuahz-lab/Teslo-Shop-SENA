'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

/**
 * Restablece la contraseña de un usuario usando un token
 * @param token - Token de recuperación
 * @param newPassword - Nueva contraseña
 */
export const resetPassword = async (token: string, newPassword: string) => {
  try {
    // Buscar el token en la base de datos
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
      include: { user: true },
    });

    // Validar que el token existe
    if (!resetToken) {
      return {
        ok: false,
        message: 'Token inválido o expirado',
      };
    }

    // Validar que no ha sido usado
    if (resetToken.used) {
      return {
        ok: false,
        message: 'Este token ya fue utilizado',
      };
    }

    // Validar que no ha expirado
    if (new Date() > resetToken.expiresAt) {
      return {
        ok: false,
        message: 'El token ha expirado. Solicita uno nuevo.',
      };
    }

    // Encriptar la nueva contraseña
    const hashedPassword = bcryptjs.hashSync(newPassword, 10);

    // Actualizar la contraseña y marcar el token como usado
    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { used: true },
      }),
    ]);

    return {
      ok: true,
      message: 'Contraseña actualizada exitosamente',
    };
  } catch (error) {
    console.error('Error al restablecer contraseña:', error);
    return {
      ok: false,
      message: 'Error al actualizar la contraseña. Por favor intenta de nuevo.',
    };
  }
};
