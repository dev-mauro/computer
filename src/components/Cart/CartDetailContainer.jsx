import { CartDetail } from "./CartDetail"
import { useNavigate } from "react-router-dom"

import { calcTotalAmount } from "../../helpers/caclCartTotalAmount";
import { ContinueShoppingLink } from "../ContinueShoppingLink";

export const CartDetailContainer = ({items}) => {
  
  const navigate = useNavigate();

  const { subtotal, shipping, taxes, total } = calcTotalAmount(items);

  const onPayClick = () => {
    navigate("/finalizar-compra");
  }

  return (
    <div className="w-fit h-fit mx-auto md:ml-5 lg:ml-10 bg-slate-100 p-5 rounded-md text-slate-700 dark:ring-1 dark:ring-teal-400 dark:bg-gray-800 dark:hover:ring-4 transition-all">
      <h3 className="font-bold text-xl mb-3 text-teal-500 dark:text-teal-400">
        Detalles de la compra
      </h3>

      <CartDetail type="Subtotal" value={subtotal}/>
      <CartDetail type="Envío" value={shipping}/>
      <CartDetail type="Impuestos" value={taxes}/>
      <CartDetail type="Total de la compra" value={total} bold/>

      <button className="w-full bg-teal-500 text-white py-2 rounded-md mt-3"
        onClick={onPayClick}
      >
        Pagar
      </button>

      <span className="text-center w-full inline-block mt-5 dark:text-gray-300">
        o 
        <ContinueShoppingLink />
      </span>

    </div>
  )
}