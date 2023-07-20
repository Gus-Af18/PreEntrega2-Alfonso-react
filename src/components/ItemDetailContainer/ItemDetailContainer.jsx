import { useState, useEffect } from "react";
import { getproductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getproductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div>
      <h1>Detalle de producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
