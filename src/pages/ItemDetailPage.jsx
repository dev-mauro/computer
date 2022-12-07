import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProcutsByName } from "../helpers";
import { ItemDetailImage, ItemDescription, ItemDetails, AddCartButton, SimiliarProducts, ItemCount } from "../components"
import { useCounter } from '../hooks'

const ItemDetailPage = () => {

  const { productName } = useParams();
  const [product, setProduct] = useState({});

  const { count, onAdd, onSubstract, onSetValue } = useCounter({initialValue: 1, minValue: 1, maxValue: 10});

  useEffect(() => {
    console.log('peticion realizada');
    getProcutsByName(productName).then( resp => setProduct(resp[0]))
  }, [productName]);  

  return (
    <>
      <div className="flex py-10 flex-col md:flex-row max-w-7xl mx-auto md:space-x-10 mb-16">

        <ItemDetailImage imageURL={ product.image }/>

        <div className="2xs:pl-5 w-full md:w-1/2 max-w-2xl">

          <ItemDescription
            brand={product.brand}
            model={product.model}
            price={product.price}
          />

          <ItemDetails details={product.details}/>

          <div className="flex flex-col items-center 2xs:items-start space-y-2 mt-16">
            <ItemCount
              count={count}
              onAdd={onAdd}
              onSubstract={onSubstract}
              onSetValue={onSetValue}
            />
            <AddCartButton/>
          </div>

        </div>


      </div>

      <SimiliarProducts product={product}/>
      
    </>
  )
}

export { ItemDetailPage }