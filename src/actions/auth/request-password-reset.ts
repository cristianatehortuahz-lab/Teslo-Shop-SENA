'use server';

import prisma from '@/lib/prisma';
import { randomBytes } from 'crypto';

/**
 * Solicita un reset de contraseña y genera un token
 * @param email - Email del usuario
 */
export const requestPasswordReset = async (email: string) => {
  try {
    // Buscar usuario
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      // Por seguridad, no revelar si el email existe o no
      return {
        ok: true,
        message: 'Si el correo existe, recibirás instrucciones',
      };
    }

    // Invalidar tokens anteriores del usuario (marcar como usados)
    await prisma.passwordResetToken.updateMany({
      where: {
        userId: user.id,
        used: false,
      },
      data: {
        used: true,
      },
    });

    // Generar token único y seguro
    const token = randomBytes(32).toString('hex');

    // Calcular expiración (1 hora)
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    // Crear nuevo token en BD
    await prisma.passwordResetToken.create({
      data: {
        token,
        expiresAt,
        userId: user.id,
      },
    });

    return {
      ok: true,
      token, // En producción NO se retornaría, se enviaría por email
      email: user.email,
      expiresAt,
    };
  } catch (error) {
    console.error('Error al solicitar reset de contraseña:', error);
    return {
      ok: false,
      message: 'Error al procesar la solicitud',
    };
  }
};
