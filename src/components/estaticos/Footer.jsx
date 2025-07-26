import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styleEstatico.css";
import flecha from "../../assets/flecha-hacia-arriba.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 - Mi App - Derechos reservados</p>
      {/* <nav className="navegacion">
        <ul className="listaNav">
          <li className="listaItem">
            <Link className="linkNavFooter" to="/terminos">
              Términos y condiciones
            </Link>
          </li>
          <li className="listaItem">
            <Link className="linkNavFooter" to="/preguntas">
              Preguntas frecuentes
            </Link>
          </li>
          <li className="listaItemFooter">
            <Link className="linkNavFooter" to="/ayuda">
              Ayuda
            </Link>
          </li>
          <li className="listaItem">
            <a
              href=""
              className="flechaArriba"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Ir arriba"
            >
              <img src={flecha} alt="foto flecha" className="img-flecha" />
            </a>
          </li>
        </ul>
      </nav> */}
    </footer>
  );
};

export default Footer;
