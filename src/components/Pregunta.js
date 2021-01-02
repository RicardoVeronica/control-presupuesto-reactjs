import React, { useState } from "react";

function Pregunta() {
  const [cantidad, setCantidad] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(cantidad);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

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
