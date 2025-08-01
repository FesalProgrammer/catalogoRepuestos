import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";
import './styleProductos.css';

const ProductList = () => {
  const {
    productos = [],
    busqueda = "",
    setBusqueda,
  } = useContext(CartContext);

  // Filtrar productos según la búsqueda (id, nombre, categoría)

  const productosFiltrados = productos.filter((producto) => {
    const search = busqueda.toLowerCase();
    return (
      producto.id.toString().includes(search) ||
      producto.nombre?.toLowerCase().includes(search) ||
      producto.categoria?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="cards-container">
      {/* <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          marginTop: "25px",
          color: "var(--color-titulo)",
        }}
      >
        Videojuegos disponibles
        <span role="img" aria-label="videojuegos"> 🎮</span>
      </h2> */}

      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "40px auto",
          border:"1px, solid, #253745",
          borderRadius: "10px",
          padding: "8px",
          backgroundColor: "#f5f5f5",
          color: "#253745",
          boxShadow: "0 1px 4px rgba(25, 188, 010, 0.08)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          columnGap: "30px",
          rowGap: "25px",
          
        }}
      >
        {productosFiltrados.map((producto) => (
          <Productos key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
