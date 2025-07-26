import React, { useContext } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";

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
    <>
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
          border:"2px, solid, #1976d2",
          borderRadius: "10px",
          padding: "8px",
          backgroundColor: "#f5f5f5",
          color: "#333",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
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
    </>
  );
};

export default ProductList;
