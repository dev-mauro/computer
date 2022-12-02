import { getProducts } from "./getProducts"

const getProductsByCategory = async(category) => {
  const { products } = await getProducts();

  return products.filter( product => product.category.split('/').includes(category));
}

export {getProductsByCategory};