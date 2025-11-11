'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMailOutline, IoArrowBackOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { requestPasswordReset } from '@/actions';

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [resetData, setResetData] = useState<{
    token: string;
    expiresAt: Date;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }

    setIsProcessing(true);

    // Llamar al server action
    const result = await requestPasswordReset(email);

    setIsProcessing(false);

    if (result.ok && result.token) {
      setResetData({
        token: result.token,
        expiresAt: new Date(result.expiresAt!),
      });
      setIsSubmitted(true);
    } else {
      // Siempre mostrar éxito por seguridad (no revelar si el email existe)
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col max-w-md">
        {/* Success message */}
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
          <div className="flex items-start">
            <IoMailOutline className="text-2xl text-green-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-1">
                ¡Instrucciones Enviadas!
              </p>
              <p className="text-sm text-green-700">
                Hemos verificado tu cuenta: <strong>{email}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Demo Email - Simula el email que recibiría */}
        {resetData && (
          <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6 shadow-sm">
            <div className="border-b border-gray-200 pb-3 mb-4">
              <p className="text-xs text-gray-500 mb-1">De: noreply@novashop.com</p>
              <p className="text-xs text-gray-500 mb-1">Para: {email}</p>
              <p className="text-sm font-semibold text-gray-800">Asunto: Recupera tu contraseña</p>
            </div>
            
            <div className="space-y-3 text-sm text-gray-700">
              <p>Hola,</p>
              <p>
                Recibimos una solicitud para restablecer la contraseña de tu cuenta.
                Si no realizaste esta solicitud, puedes ignorar este mensaje.
              </p>
              <p>
                Para restablecer tu contraseña, haz clic en el siguiente enlace:
              </p>
              
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <Link
                  href={`/auth/reset-password?token=${resetData.token}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold break-all"
                >
                  Restablecer mi contraseña →
                </Link>
              </div>
              
              <p className="text-xs text-gray-500">
                Este enlace expira el {resetData.expiresAt.toLocaleString('es-ES')} (1 hora)
              </p>
              
              <p className="text-xs text-gray-400 border-t border-gray-200 pt-3 mt-4">
                Si tienes problemas, copia y pega este enlace en tu navegador:
                <br />
                <span className="break-all font-mono text-xs">
                  {typeof window !== 'undefined' && window.location.origin}/auth/reset-password?token={resetData.token}
                </span>
              </p>
            </div>
          </div>
        )}
        
        {/* Nota de demostración */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            📧 Modo Demostración (Proyecto SENA)
          </p>
          <p className="text-xs text-blue-700">
            En producción, este mensaje se enviaría por email.
            Para la demo, se muestra aquí directamente con un link único y temporal.
          </p>
        </div>

        {/* Credentials reminder */}
        <div className="bg-gray-50 border border-gray-200 p-4 rounded mb-6">
          <p className="text-sm text-gray-600 mb-2">
            <strong>💡 Credenciales de prueba:</strong>
          </p>
          <div className="text-xs text-gray-600 space-y-1">
            <p>• Admin: fernando@google.com / 123456</p>
            <p>• Usuario: melissa@google.com / 123456</p>
          </div>
        </div>

        <Link
          href="/auth/login"
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
        >
          <IoArrowBackOutline className="mr-2" />
          Volver al inicio de sesión
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
      <label htmlFor="email" className="mb-2">
        Correo electrónico
      </label>
      <input
        id="email"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
      />

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 mb-5">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isProcessing}
        className={clsx('mb-5', {
          'btn-primary': !isProcessing,
          'btn-disabled': isProcessing,
        })}
      >
        {isProcessing ? 'Verificando...' : 'Continuar'}
      </button>

      <Link
        href="/auth/login"
        className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
      >
        <IoArrowBackOutline className="mr-2" />
        Volver al inicio de sesión
      </Link>
    </form>
  );
};
