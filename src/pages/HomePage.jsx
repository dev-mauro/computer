import { ItemListPage } from "./";
import { Hero, ItemList, LoadingProducts } from "../components"; 
import { useEffect, useState } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

import { getRandomCategory } from "../helpers"
import { getProductsBy } from "../helpers"

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const randomCategory = getRandomCategory();

    getProductsBy('category', randomCategory).then( resp => {
      setProducts(resp);
      setLoading(false);
    });

  }, [])

  return (
    <div>
      <Hero />

      <div
        className="max-w-7xl mx-auto mt-14 md:pl-10 xl:pl-0"
      >
        <div className="flex items-center mb-5">
          <RocketLaunchIcon className="w-6 h-6 mr-3 dark:text-white"/>
          <h2 className="text-2xl 2xs:text-3xl font-bold pb-1 dark:text-white">
            Productos que podrían interesarte
          </h2>
        </div>

        {
          loading
          ? (<LoadingProducts justify={"start"} wrap={false}/>)
          : <ItemList productList={products} justify={"start"} wrap={false}/>
        }

      </div>
      
    </div>
  )
}

export { HomePage };
