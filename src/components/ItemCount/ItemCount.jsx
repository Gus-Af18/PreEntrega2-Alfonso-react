import '../ItemCount/ItemCount.css'
import {useStage} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useStage(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <><div className='Counter'>
            <div className="Controls">
                <button className="button"></button>
                <h4 className='Number'>{quantity}</h4>
                <button className="button"></button>
            </div>
        </div>
        <div>
            <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
            </button>
        </div></>
    )

}

export default ItemCount