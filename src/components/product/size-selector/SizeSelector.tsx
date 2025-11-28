import type { Size } from '@/interfaces';
import clsx from 'clsx';


interface Props {
  selectedSize?: Size;
  availableSizes: Size[];  // ['SX', 'M', 'XL', 'XXL']

  onSizeChanged: (size: Size) => void;
}



export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex flex-wrap gap-3">

        {
          availableSizes.map(size => (
            <button
              key={size}
              onClick={() => onSizeChanged(size)}
              className={
                clsx(
                  "w-12 h-12 flex items-center justify-center border-2 text-sm font-bold transition-all duration-300",
                  {
                    'bg-black text-white border-black': size === selectedSize,
                    'bg-white text-black border-gray-300 hover:border-black': size !== selectedSize
                  }
                )
              }
            >
              {size}
            </button>
          ))

        }


      </div>



    </div>
  )
}