import { useSelector } from "react-redux"
import { CartDetailContainer, CartItemList, CartIsEmpty } from "../components";

const CartPage = () => {

  const { items, itemCount } = useSelector(state => state.cart);

  if(itemCount == 0) return (<CartIsEmpty />)

  return (
    <div className="flex flex-wrap max-w-7xl mx-auto w-full md:justify-evenly lg:justify-start">
      <h2 
        className="text-3xl font-semibold py-12 pl-6 w-full dark:text-white"
      >
        Tu Carrito
      </h2>

      <CartItemList items={items}/>

      <CartDetailContainer items={items}/>

    </div>
  )
}

export { CartPage }
