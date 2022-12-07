import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";

import { getProcutsByName } from "../helpers";
import { ItemDetailImage, ItemDescription, ItemDetails, AddCartButton, SimiliarProducts, ItemCount, NavigateCartButton } from "../components"
import { useCartCheck, useCounter } from '../hooks'
import { addItem } from "../store/cartSlice";

const ItemDetailPage = () => {

  const { productName } = useParams();
  const [product, setProduct] = useState({});
  //Estado maneja si el producto está en el carro
  const [added, setAdded] = useState(false)

  //Estado del itemCounter
  const { count, onAdd, onSubstract, onSetValue, onReset } = useCounter({
    initialValue: 1,
    minValue: 1,
    maxValue: 10
  });

  const { isInCart } = useCartCheck();

  useEffect(() => {
    getProcutsByName(productName).then( resp => {
      const product = resp[0];
      setProduct(product)

      //Se verifica que el producto está en el carro
      isInCart(product)
        ? setAdded(true)
        : setAdded(false)

      //Reset de itemCounter
      onReset();
    })
  }, [productName]);

  const dispatch = useDispatch();

  const onAddCart = () => {
    setAdded(true);
    dispatch( addItem({
      item: product,
      qty: count,
    }));
  }

  return (
    <>
      <div className="flex py-10 flex-col md:flex-row max-w-7xl mx-auto md:space-x-10 my-16">

        <ItemDetailImage imageURL={ product.image }/>

        <div className="2xs:pl-5 w-full md:w-1/2 max-w-2xl">

          <ItemDescription
            brand={product.brand}
            model={product.model}
            price={product.price}
          />

          <ItemDetails details={product.details}/>

          <div className="flex flex-col items-center 2xs:items-start space-y-2 mt-16">
            {
              (added)
              ? <NavigateCartButton />
              : (<>
                <ItemCount
                  count={count}
                  onAdd={onAdd}
                  onSubstract={onSubstract}
                  onSetValue={onSetValue}
                />
                <AddCartButton onClick={onAddCart}/>
              </>)
            }
          </div>

        </div>


      </div>

      <SimiliarProducts product={product}/>
      
    </>
  )
}

export { ItemDetailPage }