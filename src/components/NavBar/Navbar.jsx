import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <div>
            <h1>Tortas Artesanales</h1>
            <div>
                <Link to={'/category/tortas'}>Tortas</Link>
                <Link to={'/category/antojos'}>Antojos</Link>
                <Link to={'/category/gustos'}>Gustos</Link>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar
