import { useEffect, useState, memo } from "react";
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import ItemGrid from "../ItemGrid/ItemGrid";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListMemo = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [displayGrid, setDisplayGrid] = useState(false);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

    setLoading(true);
    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })
      .finally(() => {
        setLoading(false);
      });

    }, [categoryId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="contenido">
      <h1>{greeting}</h1>
      <button className="grilla" onClick={() => setDisplayGrid(true)}>
        grilla
      </button>
      <button className="grilla" onClick={() => setDisplayGrid(false)}>
        lista
      </button>
      {displayGrid ? (
        <ItemGrid products={products} />
      ) : (
        <ItemListMemo products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
