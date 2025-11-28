'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;

  onQuantityChanged: (value: number) => void;
}



export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {


  const onValueChanged = (value: number) => {

    if (quantity + value < 1) return;

    onQuantityChanged(quantity + value);
  };


  return (
    <div className="flex border border-gray-300 w-fit">
      <button
        onClick={() => onValueChanged(-1)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <IoRemoveCircleOutline size={20} />
      </button>

      <span className="w-12 h-10 flex items-center justify-center text-center font-bold bg-white">
        {quantity}
      </span>

      <button
        onClick={() => onValueChanged(+1)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <IoAddCircleOutline size={20} />
      </button>

    </div>
  );
};