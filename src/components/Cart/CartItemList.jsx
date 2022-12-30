import { useDispatch } from "react-redux"
import { TrashIcon } from "@heroicons/react/24/outline"

import { CartItem } from "./CartItem"
import { clearCart } from "../../store/cartSlice"

export const CartItemList = ({items}) => {

  const dispatch = useDispatch();

  const onClearCart = () => {
    dispatch( clearCart() );
  }

  return (
    <div className="max-w-3xl w-full md:w-2/4 lg:w-3/5 border-t-2 border-slate-300 dark:border-teal-400">

      <div> 
      {
        items.map( item => <CartItem item={item} key={item.item.id}/>)
      }
      </div>

      <button
        className="mt-3 mb-10 ml-2 flex gap-1 items-center bg-slate-100 py-1 px-3 rounded-md dark:bg-teal-400"
        onClick={onClearCart}
      >
        Vaciar carrito
        <TrashIcon className="w-5 h-5"/>
      </button>

    </div>
  )
}