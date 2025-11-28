'use client';

import { useState, useTransition } from 'react';
import { deleteProduct } from '@/actions';
import { IoTrashOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

interface Props {
    productId: string;
    productTitle: string;
}

export const DeleteProductButton = ({ productId, productTitle }: Props) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleDelete = () => {
        startTransition(async () => {
            const { ok, message } = await deleteProduct(productId);

            if (ok) {
                setShowConfirm(false);
                router.refresh();
            } else {
                alert(message);
            }
        });
    };

    return (
        <>
            <button
                onClick={() => setShowConfirm(true)}
                className="text-red-600 hover:text-red-800 transition-colors p-2"
                disabled={isPending}
            >
                <IoTrashOutline size={20} />
            </button>

            {showConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-none max-w-md w-full mx-4 border-2 border-black">
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Confirmar Eliminación</h3>
                        <p className="mb-6 text-gray-700">
                            ¿Estás seguro de que deseas eliminar <strong>&quot;{productTitle}&quot;</strong>? Esta acción no se puede deshacer.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="flex-1 btn-secondary"
                                disabled={isPending}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleDelete}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-none transition-all duration-300 font-bold uppercase tracking-wider text-sm disabled:opacity-50"
                                disabled={isPending}
                            >
                                {isPending ? 'Eliminando...' : 'Eliminar'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
