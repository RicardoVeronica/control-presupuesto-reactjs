import React, { useState } from "react";

function Pregunta() {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <p>Que pedo puto</p> : null}

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

export default Pregunta;
