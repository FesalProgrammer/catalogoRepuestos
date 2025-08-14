import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "../components/styleContactoLogin.css";
import Swal from "sweetalert2";

export default function Contactos() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    Swal.fire({
      title: "Envío exitoso",
      text: `Formulario enviado por: ${nombre + " " + apellido}`,
      icon: "success",
    });
    setNombre("");
    setApellido("");
    setEmail("");
  }

  return (
    <>
      <Header />
      <div className="contactos">
        <div className="contactos-container">
          <h2>
            Pagina en construccion.
          </h2>
          {/* <p style={{color:"red"}}>En la Urb.Virgen del Valle, calle 1, casa 2-3</p>
          
          <h2>
            Telefonos
          </h2>
          <p style={{color:"red"}}>04xx XXX XX XX</p> */}
        </div>
        
        
      </div>
      <Footer />
    </>
  );
}
