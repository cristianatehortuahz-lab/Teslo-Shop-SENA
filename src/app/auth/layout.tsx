import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';


export default async function ShopLayout({ children }: {
  children: React.ReactNode;
}) {


  const session = await auth();


  if (session?.user) {
    redirect('/');
  }



  return (

    <main className="flex justify-center min-h-screen">

      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        </div>

        <div className="z-10 text-center text-white p-10">
          <h1 className="text-9xl font-bold tracking-tighter mb-4">NOVA</h1>
          <p className="text-xl tracking-[0.5em] uppercase">Join the movement</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-white">
        <div className="w-full max-w-[400px]">
          {children}
        </div>
      </div>

    </main>
  );
}