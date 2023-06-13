import '../Item/Item.css'

const Item = ({id, name, img, priece, stock}) => {
    return (
        <article className="cardItem">
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
                    precio: ${priece}
                </p>
                <p className="Info">
                    stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/item/${id}`} className="option">ver detalle</link>
            </footer>
        </article>
    )
}

export default Item