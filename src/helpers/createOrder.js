import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebaseDB";
import { calcTotalAmount } from "./caclCartTotalAmount";

const createOrder = async ({items, buyer}, setOrder) => {

  const { total, subtotal, shipping, taxes } = calcTotalAmount(items);

  const order = {
    items: items.map(({item, qty}) => ({id: item.id, price: item.price, model: item.model, qty})),
    total,
    priceDetail: {subtotal, shipping, taxes},
    buyer,
  }

  const coll = collection(db, 'orders');
  const { id } = await addDoc(coll, order);

  return {data: order, id};

}

export { createOrder }