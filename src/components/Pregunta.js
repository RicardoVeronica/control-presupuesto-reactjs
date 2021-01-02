function Pregunta() {
  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      <form>
        <input
          type="text"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
}

export default Pregunta;
