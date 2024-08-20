
import LOGO from "../../Imagenes/LOGO.png";
import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom"


const NavBar = () => {
  return (
    <header>
      <Link to="/Inicio">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
          <h1>Saboralma</h1>
        </div>
      </Link>
      <ul>
        <li>
          <NavLink to="/Inicio">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/productos">PRODUCTOS</NavLink>
        </li>
        <li>
          <NavLink to="/category/comidas">COMIDAS</NavLink>
        </li>
        <li>
          <NavLink to="/category/bebidas">BEBIDAS</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  );
};

export default NavBar;
