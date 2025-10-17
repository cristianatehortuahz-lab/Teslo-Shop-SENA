import { titleFont } from '@/config/fonts';
import { ForgotPasswordForm } from './ui/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>
        Recuperar Contraseña
      </h1>
      
      <p className="text-gray-600 mb-5">
        Ingresa tu correo electrónico y te mostraremos cómo restablecer tu contraseña
      </p>

      <ForgotPasswordForm />
    </div>
  );
}
