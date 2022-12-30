export const getLocalCart = () => {
  const localData = JSON.parse(localStorage.getItem('cart'));

  return localData;
}