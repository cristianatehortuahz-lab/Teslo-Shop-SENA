'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Simula un pago para proyectos de demostración (MODO PRUEBA)
 * Útil para proyectos educativos sin necesidad de configurar PayPal
 */
export const simulatePayment = async (orderId: string) => {
  try {
    // Generar un ID de transacción simulado
    const simulatedTransactionId = `DEMO-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // Actualizar la orden como pagada
    await prisma.order.update({
      where: { id: orderId },
      data: {
        isPaid: true,
        paidAt: new Date(),
        transactionId: simulatedTransactionId,
      },
    });

    // Revalidar la página de la orden
    revalidatePath(`/orders/${orderId}`);

    return {
      ok: true,
      message: 'Pago simulado exitosamente',
      transactionId: simulatedTransactionId,
    };
  } catch (error) {
    console.error('Error al simular pago:', error);
    return {
      ok: false,
      message: 'Error al procesar el pago simulado',
    };
  }
};
