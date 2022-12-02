import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { getProducts, getProductsByCategory } from "../helpers";
import { ItemList, PageTitle } from "../components";

const ItemListPage = () => {
  
  const { categoryId } = useParams();

  const [products, setProducts] = useState([])

  useEffect(() => {

    if(categoryId){
      getProductsByCategory(categoryId).then( resp => {
        setProducts(resp);
      });
    }

  }, [categoryId])
  
  
  return (
    <>
      <PageTitle title={categoryId}/>

      <ItemList productList={products}/>
    </>
  )
}

export { ItemListPage }