import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseDB";

const getProducts = async() => {

  const coll = collection(db, 'products');
  const { docs } = await getDocs( coll );

  const data = docs.map( doc => ({
    ...doc.data(),
    id: doc.id,
  }) );

  return data;

}

export { getProducts }