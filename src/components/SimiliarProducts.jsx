import { useEffect, useState } from "react";
import { TagIcon } from "@heroicons/react/24/solid";

import { ItemList, LoadingSimilarProducts } from "../components";
import { getProductsBy } from "../helpers";

const SimiliarProducts = ({ product }) => {

  const { category, subcategory, id } = product;

  const [similarProducts, setSimilarProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!category) return;

    getProductsBy('subcategory', subcategory ).then( resp => {
      let similar = [];
      
      if( resp.length > 1 ) {
        similar = resp.filter(item => item.id != id);
        setSimilarProducts(similar);
        setLoading(false);
        return;
      }

      //Se ejecuta si no hay ningun producto con la misma subcategoria
      getProductsBy('category', category ).then( resp => {
        similar = resp.filter(item => item.id != id);
        setSimilarProducts(similar);
        setLoading(false);
      });
      
    });

  }, [product])

  if(loading) return <LoadingSimilarProducts />

  return (
    <div
      className="max-w-7xl mx-auto md:pl-10 xl:pl-0"
    >
      <div className="flex items-center mb-5">
        <TagIcon className="w-6 h-6 mr-3 dark:text-white"/>
        <h2 className="text-2xl 2xs:text-3xl capitalize font-bold pb-1 dark:text-white">
          productos relacionados
        </h2>
      </div>

      <ItemList productList={similarProducts} justify={"start"} wrap={false}/>
    </div>
  )
}

export { SimiliarProducts }