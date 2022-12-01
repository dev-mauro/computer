import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const itemsCount = 10;

const CartWidget = () => {
  return (
    <NavLink to="carrito" className="flex">
      <button
        className="flex w-13 md:w-18 2xl:w-20 space-x-1 justify-center py-2 px-2 xs:px-2 2xl:px-3 rounded-md hover:bg-gray-300 hover:font-bold hover:text-teal-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:hover:font-normal"
      >

        <ShoppingBagIcon className="w-6 h-6"/>
        <span>{ itemsCount }</span>

      </button>
    </NavLink>
  )
}

export { CartWidget };
