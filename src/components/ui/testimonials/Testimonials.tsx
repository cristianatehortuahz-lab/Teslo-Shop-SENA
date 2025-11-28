'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const testimonialTexts = [
  "Excelente calidad de productos. Mi pedido llegó rápido y todo en perfecto estado. Definitivamente volveré a comprar.",
  "La mejor experiencia de compra online que he tenido. El servicio al cliente es excepcional y los productos superaron mis expectativas.",
  "Increíble variedad de productos y precios muy competitivos. El proceso de compra fue muy sencillo y seguro.",
  "Me encanta la calidad de la ropa. Las tallas son precisas y el diseño es moderno. Muy satisfecho con mi compra.",
];

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    let mounted = true;

    // Datos de respaldo si la API falla
    const fallbackData: Testimonial[] = [
      { id: 1, name: 'María García', avatar: '', rating: 5, comment: testimonialTexts[0] },
      { id: 2, name: 'Carlos Rodríguez', avatar: '', rating: 5, comment: testimonialTexts[1] },
      { id: 3, name: 'Ana Martínez', avatar: '', rating: 5, comment: testimonialTexts[2] },
      { id: 4, name: 'Luis Pérez', avatar: '', rating: 5, comment: testimonialTexts[3] },
    ];

    fetch('https://api.escuelajs.co/api/v1/users')
      .then(r => r.ok ? r.json() : [])
      .then((data: any[]) => {
        if (!mounted) return;

        if (!data || data.length === 0) {
          console.log('Usando testimonials de respaldo');
          setTestimonials(fallbackData);
          setLoading(false);
          return;
        }

        const parsed: Testimonial[] = data
          .slice(0, 4)
          .map((u, idx) => ({
            id: u.id,
            name: u.name || 'Cliente',
            avatar: u.avatar || '', // Usar avatar de la API
            rating: 5,
            comment: testimonialTexts[idx] || testimonialTexts[0]
          }));

        console.log('Testimonials cargados:', parsed);
        setTestimonials(parsed);
        setLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        console.log('Error en API, usando testimonials de respaldo');
        setTestimonials(fallbackData);
        setLoading(false);
      });

    return () => { mounted = false };
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600">Experiencias reales de quienes confían en Nova | Shop</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-16 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const handleImageError = (id: number) => {
    setImageErrors(prev => new Set(prev).add(id));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600">Experiencias reales de quienes confían en Nova | Shop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div
                  className="relative w-12 h-12 rounded-full mr-3 flex-shrink-0 overflow-hidden flex items-center justify-center"
                  style={{
                    background: idx === 0 ? 'linear-gradient(to bottom right, rgb(59, 130, 246), rgb(147, 51, 234))' :
                      idx === 1 ? 'linear-gradient(to bottom right, rgb(236, 72, 153), rgb(225, 29, 72))' :
                        idx === 2 ? 'linear-gradient(to bottom right, rgb(34, 197, 94), rgb(20, 184, 166))' :
                          'linear-gradient(to bottom right, rgb(249, 115, 22), rgb(220, 38, 38))'
                  }}
                >
                  {testimonial.avatar && !imageErrors.has(testimonial.id) ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      onError={() => handleImageError(testimonial.id)}
                    />
                  ) : (
                    <span className="text-white font-bold text-sm">
                      {getInitials(testimonial.name)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &quot;{testimonial.comment}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
