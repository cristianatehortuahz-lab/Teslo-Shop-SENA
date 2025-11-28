import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10 mt-10 flex-col items-center gap-4">

      <Link
        href='/'
        className="flex flex-col items-center"
      >
        <span className={`${titleFont.className} antialiased font-bold text-4xl`}>NOVA </span>
        <span className='tracking-widest text-xs uppercase'>Premium Streetwear</span>
      </Link>

      <div className='flex gap-6 mt-4 uppercase tracking-wider font-medium'>
        <Link
          href='/'
          className="hover:underline hover:text-accent transition-colors"
        >
          Privacidad & Legal
        </Link>

        <Link
          href='/'
          className="hover:underline hover:text-accent transition-colors"
        >
          Ubicaciones
        </Link>
      </div>

      <div className='text-gray-500 mt-4'>
        © {new Date().getFullYear()} Nova Shop. All rights reserved.
      </div>

    </div>
  )
}