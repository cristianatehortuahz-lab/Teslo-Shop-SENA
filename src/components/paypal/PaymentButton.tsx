'use client';

import { PayPalButton } from './PayPalButton';
import { SimulatePaymentButton } from './SimulatePaymentButton';

interface Props {
  orderId: string;
  amount: number;
}

/**
 * Componente inteligente que decide si usar PayPal real o simulado
 * - Si hay credenciales de PayPal configuradas → Usa PayPal real
 * - Si NO hay credenciales → Usa simulación de pago (GRATIS)
 */
export const PaymentButton = ({ orderId, amount }: Props) => {
  // Detectar si PayPal está configurado
  const isPayPalConfigured = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID && 
                              process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID.trim() !== '';

  // Si PayPal está configurado, usar el botón real
  if (isPayPalConfigured) {
    return <PayPalButton orderId={orderId} amount={amount} />;
  }

  // Si no está configurado, usar simulación (ideal para SENA)
  return <SimulatePaymentButton orderId={orderId} amount={amount} />;
};
