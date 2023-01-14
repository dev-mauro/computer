import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { ContinueShoppingLink } from "./ContinueShoppingLink";

export const OrderFinished = ({order}) => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch( clearCart() );
  }, [])

  console.log('Orden finalizada', order)

  const { id } = order;

  return (
    <div className="text-center dark:text-white pt-10">
      <h3 className="text-3xl mb-3">¡ Finalizaste tu compra !</h3>
      <h5 className="mb-10">
        Código seguimiento:
        <span className="text-teal-500 font-semibold pl-2 dark:text-teal-400">{id}</span>
      </h5>

      <span className="bg-slate-100 px-4 py-2 rounded-md dark:bg-gray-800 dark:ring-2 dark:ring-teal-400">
        ¿Te faltó algo?
        <ContinueShoppingLink />
      </span>
    </div>
  )
}