// import React, { useState } from "react";

function Formulario() {
  return (
    <form>
      <h2>Agrega tus gastos aqui</h2>

      <div className="campo">
        <label>Nombre gasto</label>
        <input type="text" className="u-full-width" placeholder="Ej. Cine" />

        <label>Cantidad gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" />
      </div>

      <button type="submit" className="button-primary u-full-width">
        Agregar gasto
      </button>
    </form>
  );
}

export default Formulario;
