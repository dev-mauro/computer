import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseDB";

const getProductsBy = async(field , value) => {

  const coll = collection(db, 'products');
  const q = query( coll, where(field, '==', value) );

  const { docs } = await getDocs( q );

  const data = docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;

}

export { getProductsBy };