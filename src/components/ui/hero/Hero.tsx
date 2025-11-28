import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] bg-black flex flex-col justify-center items-center text-center overflow-hidden">

            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-screen opacity-50"></div>
            </div>

            <div className="z-10 px-4 fade-in">
                <h2 className="text-white text-lg md:text-xl tracking-[0.5em] uppercase mb-4">
                    Nueva Colección 2024
                </h2>

                <h1 className={`${titleFont.className} text-7xl md:text-9xl text-white font-bold tracking-tighter mb-8 leading-none`}>
                    NOVA<br />DROP 01
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
                    Redefiniendo el estilo urbano con cortes minimalistas y materiales premium.
                </p>

                <Link
                    href="/gender/men"
                    className="inline-block bg-white text-black px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
                >
                    Ver Colección
                </Link>
            </div>
        </div>
    );
};
