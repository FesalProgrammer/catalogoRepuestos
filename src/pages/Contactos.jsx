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
            Visitanos
          </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <h2>
            Telefonos
          </h2>
          <p>04xx xxx yy zz</p>
        </div>
        
        
      </div>
      <Footer />
    </>
  );
}
