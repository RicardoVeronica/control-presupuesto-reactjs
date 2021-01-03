import { revisarPresupuesto } from "../helpers/helpers";
import PropTypes from "prop-types";

function ControlPresupuesto({ presupuesto, restante }) {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: {restante}
      </div>
    </>
  );
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
