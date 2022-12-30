import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { getProducts, getProductsBy } from "../helpers";
import { ItemList, LoadingProducts, PageTitle } from "../components";

const ItemListPage = () => {
  
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(categoryId){
      getProductsBy('category', categoryId).then( resp => {
        setProducts(resp);
        setLoading(false);
      });
      return;
    }

    //Si no hay categoria, mostrar todos los productos.
    getProducts().then(resp => {
      setProducts(resp);
      setLoading(false);
    });

  }, [categoryId])
  
  
  if(loading) return (<LoadingProducts />);

  return (
    <>
      <PageTitle title={categoryId}/>

      <ItemList productList={products}/>
    </>
  )
}

export { ItemListPage }