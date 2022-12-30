import { FaceFrownIcon, ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

export const CartIsEmpty = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/home');
  }

  return (
    <div>
      <h2 className="text-center text-2xl mt-16 dark:text-white">Tu carrito está <strong>vacío</strong>...</h2>
      <FaceFrownIcon className="w-20 h-20 mx-auto my-5 dark:text-slate-100"/>

      <button className="mx-auto flex gap-2 bg-teal-400 text-white font-semibold px-4 py-2 rounded-md items-center"
        onClick={onButtonClick}
      >
        <ShoppingBagIcon className="w-6 h-6"/>
        Ir a comprar
        <ShoppingCartIcon className="w-6 h-6"/>
      </button>

    </div>
  )
}