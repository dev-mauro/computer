export const updateLocalCart = (items, itemCount) => {
  const localData = {
    items, itemCount
  };

  const stringData = JSON.stringify( localData );

  localStorage.setItem('cart', stringData);
}