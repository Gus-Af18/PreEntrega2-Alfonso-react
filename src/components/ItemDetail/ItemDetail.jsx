
import '../ItemCount/ItemCount'

const ItemCount = ({ id, name, img, category, descriprion, price, stock}) => {
    retun (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className="Info">
                    categoria: {category} 
                </p>
                <p className="Info">
                    descripcion: {descriprion}
                </p>
                <p className="Info">
                    precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial = {1} stock={stock} onAdd = {(quantity) => console.log ('cantidad agrgada',)} />
            </footer>
        </article>
    )
}