'use client';

import { useState } from 'react';
import { simulatePayment } from '@/actions';
import clsx from 'clsx';
import { IoCardOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

interface Props {
  orderId: string;
  amount: number;
}

export const SimulatePaymentButton = ({ orderId, amount }: Props) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSimulatePayment = async () => {
    setIsProcessing(true);
    setErrorMessage('');

    // Simular un pequeño delay como si fuera un pago real
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = await simulatePayment(orderId);

    if (result.ok) {
      setIsSuccess(true);
      // Recargar la página después de un momento
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      setErrorMessage(result.message);
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-green-50 border-2 border-green-500 rounded-lg">
        <IoCheckmarkCircleOutline className="text-6xl text-green-600 mb-2" />
        <p className="text-green-800 font-semibold text-lg">¡Pago simulado exitoso!</p>
        <p className="text-green-600 text-sm">Redirigiendo...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Banner informativo */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <div className="flex items-start">
          <IoCardOutline className="text-2xl text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-1">
              Modo de Pago de Demostración
            </p>
            <p className="text-xs text-blue-700">
              Este botón simula un pago exitoso sin usar dinero real. 
              Ideal para proyectos educativos y demostraciones.
            </p>
          </div>
        </div>
      </div>

      {/* Resumen del pago */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Monto a pagar:</span>
          <span className="text-2xl font-bold text-gray-900">
            ${amount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">ID de Orden:</span>
          <span className="font-mono text-gray-600">#{orderId.split('-').at(-1)}</span>
        </div>
      </div>

      {/* Mensaje de error */}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded p-3">
          <p className="text-red-800 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Botón de simular pago */}
      <button
        onClick={handleSimulatePayment}
        disabled={isProcessing}
        className={clsx(
          'w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200',
          'flex items-center justify-center gap-2',
          {
            'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg':
              !isProcessing,
            'bg-gray-400 cursor-not-allowed': isProcessing,
          }
        )}
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Procesando pago...</span>
          </>
        ) : (
          <>
            <IoCardOutline className="text-2xl" />
            <span>Simular Pago Exitoso</span>
          </>
        )}
      </button>

      {/* Opciones de PayPal */}
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">
          ¿Quieres usar PayPal Sandbox real?
        </p>
        <a
          href="/docs/GUIA_PAYPAL_SANDBOX.md"
          target="_blank"
          className="text-xs text-blue-600 hover:text-blue-800 underline"
        >
          Ver guía de configuración de PayPal Sandbox →
        </a>
      </div>
    </div>
  );
};
