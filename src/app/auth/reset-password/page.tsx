import { titleFont } from '@/config/fonts';
import { ResetPasswordForm } from './ui/ResetPasswordForm';

interface Props {
  searchParams: {
    token?: string;
  };
}

export default function ResetPasswordPage({ searchParams }: Props) {
  const token = searchParams.token || '';

  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>
        Nueva Contraseña
      </h1>

      <p className="text-gray-600 mb-5">
        Ingresa tu nueva contraseña para completar la recuperación
      </p>

      <ResetPasswordForm token={token} />
    </div>
  );
}
