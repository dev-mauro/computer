import { getProducts } from "./getProducts";

const getProcutsByName = async(name) => {
  const { products } = await getProducts();

  return products.filter( product => product.model === name);
}

export { getProcutsByName }