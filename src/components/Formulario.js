import React, { useState } from "react";
import Error from "../components/Error";
import shortid from "shortid";
import PropTypes from "prop-types";

function Formulario({ setGasto, setCrear }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    setGasto(gasto);
    setCrear(true);
    setNombre("");
    setCantidad(0);
  };

  return (
    <form>
      <h2>Agrega tus gastos aqui</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Cine"
          value={nombre}
          onInput={(e) => setNombre(e.target.value)}
        />

        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onInput={(e) => setCantidad(parseInt(e.target.value))}
        />
      </div>

      <button
        type="submit"
        className="button-primary u-full-width"
        onClick={handleClick}
      >
        Agregar gasto
      </button>
    </form>
  );
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrear: PropTypes.func.isRequired,
};

export default Formulario;
