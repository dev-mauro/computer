import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"

const NavigateCartButton = () => {

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/carrito');
  }

  return (
    <>
      <span className="py-1 px-3 bg-slate-100 text-gray-800 dark:bg-teal-800 dark:rounded-sm dark:text-white">¡Ya lo tienes en tu carro!</span>
      <button
        onClick={onButtonClick}
        className="flex items-center justify-center w-52 h-9 bg-slate-200 rounded-sm border-b-2 border-gray-400 text-gray-800 hover:bg-slate-100 dark:bg-teal-400 dark:text-white dark:border-teal-600"
      >
        <ShoppingCartIcon className="w-6 h-6 mr-2"/>
        Ir al carrito
      </button>
    </>
  )
}

export { NavigateCartButton }