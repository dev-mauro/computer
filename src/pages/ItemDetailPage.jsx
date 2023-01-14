import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";

import { getProductsBy } from "../helpers";
import { ItemDetailImage, ItemDescription, ItemDetails, AddCartButton, SimiliarProducts, ItemCount, NavigateCartButton, Loading } from "../components"
import { useCartCheck, useCounter } from '../hooks'
import { addItem } from "../store/cartSlice";

const ItemDetailPage = () => {

  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
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
    getProductsBy('model', productName).then( resp => {
      const product = resp[0];

      setProduct(product);
      setLoading(false);

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

  useEffect(() => {
    setLoading(true);
  }, [productName])

  if(loading) return(<Loading />);

  return (
    <>
      <div className="flex py-10 flex-col md:flex-row max-w-7xl mx-auto md:space-x-10 my-16">

        <ItemDetailImage imageURL={ product.imageURL }/>

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