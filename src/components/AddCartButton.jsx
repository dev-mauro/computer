import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const AddCartButton = () => {
  return (
    <button
      className="flex justify-center items-center w-48 rounded-md leading-9 text-gray-800 bg-slate-200 border-b-2 border-gray-400 hover:bg-slate-100 dark:bg-teal-400 dark:text-white dark:border-teal-600"
    >
      <ShoppingCartIcon className="w-6 h-6 mr-2"/>
      Añadir al carro
    </button>
  )
}

export { AddCartButton }