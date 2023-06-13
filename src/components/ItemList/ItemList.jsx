
import Item from '../Item/Item'

const ItemList = () => {
    return (
        <div className="ListGroup">
            {getProducts.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList