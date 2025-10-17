'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoCheckmarkCircleOutline, IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { resetPassword } from '@/actions';

interface Props {
  token: string;
}

export const ResetPasswordForm = ({ token }: Props) => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (!password || password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (!token) {
      setError('Token no válido. Por favor solicita un nuevo enlace de recuperación.');
      return;
    }

    setIsProcessing(true);

    // Llamar al server action con el token
    const result = await resetPassword(token, password);

    if (result.ok) {
      setIsSuccess(true);
      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } else {
      setError(result.message);
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col max-w-md">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mb-6">
          <div className="flex items-center mb-4">
            <IoCheckmarkCircleOutline className="text-5xl text-green-600 mr-4" />
            <div>
              <p className="font-semibold text-green-900 text-lg mb-1">
                ¡Contraseña Actualizada!
              </p>
              <p className="text-sm text-green-700">
                Tu contraseña ha sido cambiada exitosamente.
              </p>
            </div>
          </div>
          <p className="text-sm text-green-600">
            Redirigiendo al inicio de sesión...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md">
      {/* Campo de contraseña */}
      <label htmlFor="password" className="mb-2">
        Nueva contraseña
      </label>
      <div className="relative mb-5">
        <input
          id="password"
          className="w-full px-5 py-2 border bg-gray-200 rounded pr-12"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
        </button>
      </div>

      {/* Campo de confirmación */}
      <label htmlFor="confirmPassword" className="mb-2">
        Confirmar contraseña
      </label>
      <div className="relative mb-5">
        <input
          id="confirmPassword"
          className="w-full px-5 py-2 border bg-gray-200 rounded pr-12"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repite tu contraseña"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
        </button>
      </div>

      {/* Indicador de seguridad */}
      {password.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className={clsx('h-full transition-all', {
                  'bg-red-500 w-1/3': password.length < 6,
                  'bg-yellow-500 w-2/3': password.length >= 6 && password.length < 10,
                  'bg-green-500 w-full': password.length >= 10,
                })}
              />
            </div>
            <span className="text-xs text-gray-600">
              {password.length < 6 && 'Débil'}
              {password.length >= 6 && password.length < 10 && 'Media'}
              {password.length >= 10 && 'Fuerte'}
            </span>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 mb-5">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      {/* Demo note */}
      <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-5">
        <p className="text-xs text-blue-700">
          💡 <strong>Nota:</strong> Esta contraseña se encripta con bcryptjs y se guarda 
          de forma segura en la base de datos. El token de recuperación se marca como usado 
          y no puede reutilizarse.
        </p>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className={clsx('mb-5', {
          'btn-primary': !isProcessing,
          'btn-disabled': isProcessing,
        })}
      >
        {isProcessing ? 'Actualizando...' : 'Cambiar Contraseña'}
      </button>

      <Link
        href="/auth/login"
        className="text-blue-600 hover:text-blue-800 text-sm text-center"
      >
        Volver al inicio de sesión
      </Link>
    </form>
  );
};
