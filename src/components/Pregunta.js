import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

function Pregunta({ setPresupuesto, setRestante, setPregunta }) {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form>
        <input
          type="text"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onInput={(e) => setCantidad(parseInt(e.target.value))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
          onClick={handleClick}
        />
      </form>
    </>
  );
}

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
