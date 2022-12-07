import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProcutsByName, getProductsByCategory } from "../helpers";

import { ShoppingCartIcon, TagIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { ItemList } from "../components";

const ItemDetailPage = () => {

  const { productName } = useParams();

  const [product, setProduct] = useState({})
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    getProcutsByName(productName).then( resp => setProduct(resp[0]))
  }, [productName]);

  useEffect(() => {
    if(!product.category) return;

    const [mainCategory, subCategory] = product.category.split('/');

    getProductsByCategory( subCategory ).then( resp => {
      let similar = [];
      
      if( resp.length > 1 ) {
        similar = resp.filter(item => item.id != product.id);
        setSimilarProducts(similar)
        return;
      }

      //Se ejecuta si no hay ningun producto con la misma subcategoria
      getProductsByCategory( mainCategory ).then( resp => {
        similar = resp.filter(item => item.id != product.id);
        setSimilarProducts(similar);
      });
      
    });

  }, [product])

  const itemDetailTitle = () => {
    const {model, brand} = product;

    if(!model) return;

    if(model.includes(brand)) return model;

    return `${brand} ${model}`;
  }
  

  return (
    <>
      <div className="flex py-10 flex-col md:flex-row max-w-7xl mx-auto md:space-x-10 mb-16">

        <figure className="w-full md:w-1/2 h-96 ring-1 ring-slate-200 mb-10 md:mb-0">
          <img src={product.imageURL} alt="" />
        </figure>

        <div className="2xs:pl-5 w-full md:w-1/2 max-w-2xl">

          <h3 className="text-3xl capitalize font-bold pb-1 dark:text-white">
            {itemDetailTitle()}
          </h3>

          <p className="text-xl font-light mb-16 dark:text-gray-100">
            ${product.price}
          </p>

          <hr className="border-gray-300 dark:border-teal-400"/>

          <p className="py-7 relative dark:text-white">
            <legend className="absolute bg-gray-50 pr-1 text-gray-500 dark:text-teal-400 dark:bg-gray-700 " style={{top: '-13px'}}>
              <InformationCircleIcon className="w-8 h-8"/>
            </legend>
            {product.details}
          </p>

          <hr className="border-gray-300 dark:border-teal-400"/>

          <button className="mt-16 pl-3 pr-6  rounded-md leading-9 text-white bg-teal-500 flex items-center">
            <ShoppingCartIcon className="w-6 h-6 mr-2"/>
            Añadir al carro
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto md:pl-10 xl:pl-0">
        <div className="flex items-center mb-5">
        <TagIcon className="w-6 h-6 mr-3 dark:text-white"/>
        <h2 className="text-2xl 2xs:text-3xl capitalize font-bold pb-1 dark:text-white">
          Productos similares
        </h2></div>

        <ItemList productList={similarProducts} justify={"start"} wrap={false}/>
      </div>
    </>
  )
}

export { ItemDetailPage }