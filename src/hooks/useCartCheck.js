import { useSelector } from "react-redux"

const useCartCheck = () => {

  const { items } = useSelector( state => state.cart );

  const isInCart = ( product ) => {
    console.log('items: ', items);
    console.log('product', product);

    console.log('isIn?', items.find( ({item}) => item.id === product.id))

    return items.find( ({item}) => item.id === product.id);
  }
  
  return {
    isInCart,
  }
}

export { useCartCheck }