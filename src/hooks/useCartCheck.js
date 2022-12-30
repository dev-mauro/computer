import { useSelector } from "react-redux"

const useCartCheck = () => {

  const { items } = useSelector( state => state.cart );

  const isInCart = ( product ) => {
    return items.find( ({item}) => item.id === product.id);
  }
  
  return {
    isInCart,
  }
}

export { useCartCheck }