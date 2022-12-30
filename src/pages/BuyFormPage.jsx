import { useState } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

import { BuyerForm, OrderFinished } from "../components";

export const BuyFormPage = () => {

  const { itemCount } = useSelector(state => state.cart);
  const [order, setOrder] = useState('');

  if(order) return (<OrderFinished order={order}/>);

  if(itemCount == 0) return (<Navigate to="/carrito" replace/>);

  return (
    <div className="py-10 dark:text-white">
      <h2 className="text-3xl text-center font-semibold">
        Antes de finalizar tu compra
      </h2>

      <hr className="w-72 mx-auto border-slate-300 my-3 dark:border-teal-400"/>

      <p className="text-base text-center mb-10 dark:text-gray-100">
        ingresa tus datos para el seguimiento
      </p>

      <BuyerForm setOrder={setOrder}/>
    </div>
  )
}