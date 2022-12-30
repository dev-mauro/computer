import { formatNumber } from "./formatNumber";

const calcTotalAmount = (items) => {
  let subtotal = 0;
  items.forEach( product => {
    const {item, qty} = product;
    subtotal += item.price * qty;
  });

  subtotal = formatNumber(subtotal)
  const shipping = 9.99;
  const taxes = formatNumber(subtotal * 0.19);
  const total = formatNumber(subtotal + shipping + taxes);

  return {subtotal, shipping, taxes, total};
}

export { calcTotalAmount }