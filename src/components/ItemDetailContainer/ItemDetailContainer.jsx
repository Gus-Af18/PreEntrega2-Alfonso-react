import { useState, useEffect } from "react";
//import { getproductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", itemId);

    getDoc(productRef).then((querySnapshot) => {
      const fields = querySnapshot.data();
      const productAdapted = { id: querySnapshot.id, ...fields };

      setProduct(productAdapted);
    });
    // getProductById(itemId)
    //     .then(response => {
    //         setProduct(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
  }, [itemId]);

  return (
    <div>
      <h1>Detalle de producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
