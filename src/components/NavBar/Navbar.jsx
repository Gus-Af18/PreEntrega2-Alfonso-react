import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <div id="menuNavbar">
            <h1 className="tituloPrincipal">Tortas Artesanales</h1>
            <div id="menuBotones">
                <Link className="menu" to={'/category/tortas'}>Tortas</Link>
                <Link className="menu" to={'/category/antojos'}>Antojos</Link>
                <Link className="menu" to={'/category/gustos'}>Gustos</Link>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar
