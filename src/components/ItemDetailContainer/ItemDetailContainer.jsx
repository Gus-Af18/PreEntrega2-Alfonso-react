import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getproductsById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { product, setproduct } = useState (null)

    const {itemId} = useParams()

    useEffect (() => {
        getproductsById (itemId)
        .then(Response => {
            setproduct (Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer