import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styleEstatico.css";
import Cart from "../Cart";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const { cart } = useContext(CartContext);
  // const cartCount = cart.length; //cantidad de items en el carrito
  const cartCount = cart.reduce(
    (total, item) => total + (item.cantidad || 1),
    0
  ); // cantidad total de productos agregados al carrito.

  const { setCartOpen } = useContext(CartContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {/* <img src={logo} alt="foto" className="img-logo" /> */}
            <span className="logo-text">
              Tienda<span style={{ color: "white" }}>Repuestos</span>Michael
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2rem"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink className="link" to="/">
                  Inicio
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="link" to="/acercade">
                  Nosotros
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="link" to="/">
                  Repuestos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="link" to="/admin">
                  Login 
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <div style={{ position: "relative" }}>
                  <button
                  className="btnCart link"
                  onClick={() => setCartOpen(true)}
                  style={{ background: "none", border: "none" }}
                >
                  <div className="contador" style={{display: cartCount === 0 ? 'none' : 'block'}}>{cartCount}</div><FaShoppingCart color="red" />
                  </button>
                </div>
                <Cart />
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="link" to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="link" to="/admin">
                  Login 
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
