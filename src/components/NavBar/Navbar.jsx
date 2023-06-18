import "../NavBar/Navbar.modules.css";
import CarWeight from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h3>Tortas Artesanales</h3>
      </Link>
      <h1>Tortas Artesanales</h1>
      <div className="Categories">
        <NavLink
          to={`/category/tortas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          tortas
        </NavLink>
        <NavLink
          to={`/category/antojos`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          antojos
        </NavLink>
        <NavLink
          to={`/category/gustos`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          gustos
        </NavLink>
      </div>
      <CarWeight />
    </nav>
  );
};

export default NavBar;
