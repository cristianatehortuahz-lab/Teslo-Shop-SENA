'use client';

import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useCartStore } from '@/store/cart/cart-store';

/**
 * Componente que sincroniza el carrito con el usuario autenticado.
 * Limpia el carrito cuando el usuario cambia o cierra sesión.
 */
export const CartSync = () => {
  const { data: session, status } = useSession();
  const clearCart = useCartStore(state => state.clearCart);
  const prevUserIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Solo ejecutar cuando el status esté definido (no loading)
    if (status === 'loading') return;

    const currentUserId = session?.user?.id || null;
    const prevUserId = prevUserIdRef.current;

    // Si es la primera vez, solo guardar el ID actual
    if (prevUserId === null) {
      prevUserIdRef.current = currentUserId;
      return;
    }

    // Si el usuario cambió (login diferente, logout, o switch de usuario)
    if (prevUserId !== currentUserId) {
      console.log('👤 Usuario cambió, limpiando carrito...');
      clearCart();
      prevUserIdRef.current = currentUserId;
    }
  }, [session?.user?.id, status, clearCart]);

  return null;
};
