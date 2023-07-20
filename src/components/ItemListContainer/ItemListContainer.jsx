import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [setTitle] = useState('Primer titulo')

    const { categoryId } = useParams()

    useEffect(() => {
        const getFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)
        getFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false) 
            })
    }, [categoryId])
    
    useEffect(() => {
        setTimeout(() => {
            setTitle('segundo titulo')
        }, 2000)
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
