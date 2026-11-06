import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Plazos from "./components/Plazos";
import Interes from "./components/Interes";
import { formatearDinero, calcularPrestamo } from "./helpers";

function App() {
  // antes del return va el coodigo js y los states

  // cada vez que se usa un set, la pagina vuelve a leer los datos de todo
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

  // configuracion del interes (automatico o personalizado por el usuario)
  const [interes, setInteres] = useState({
    modo: "automatico",
    tasa: 24,
    periodo: "anual",
    metodo: "frances",
  });

  // total y pago se calculan a partir del state, no necesitan su propio state
  const total = calcularPrestamo(cantidad, meses, interes);
  const pago = total / meses;
  const interesTotal = total - cantidad;

  // variables reutilizables
  const min = 0;
  const max = 20000;
  const step = 100;

  function handleChange(e) {
    setCantidad(+e.target.value); //el +  hace un parseInt al valor = parseInt(e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - step;

    if (valor < min) {
      alert("Cantidad no valida");
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + step;

    if (valor > max) {
      alert("Cantidad no valida");
      return;
    }

    setCantidad(valor);
  }

  function handleChangePlazo(e) {
    setMeses(+e.target.value);
  }

  return (
    //dentro del return va todo el html
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        {/* header de la pagina */}
        <Header />

        {/* botones de incremento y decremento */}
        <div className="flex justify-between my-6">
          <Button operador="-" fn={handleClickDecremento} />

          <Button operador="+" fn={handleClickIncremento} />
        </div>

        {/* barra de subir o bajar prestamo */}
        <input
          type="range"
          className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mt-2"
          onChange={handleChange}
          min={min}
          max={max}
          value={cantidad}
          step={step}
        />

        {/* Cantidad de prestamo actual */}
        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        {/* opciones de plazo */}
        <Plazos meses={meses} fn={handleChangePlazo} />

        {/* configuracion del interes */}
        <Interes config={interes} setConfig={setInteres} />

        {/* muestra infomracion del total a pagar y cuanto a pagar por mes */}
        <div className="my-5 space-y-3 bg-gray-50 p-5">
          <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Resumen <span className="text-indigo-600">de pagos</span>
          </h2>

          <p className="text-xl text-gray-500 text-center font-bold">
            {meses} Meses
          </p>
          <p className="text-xl text-gray-500 text-center font-bold">
            {formatearDinero(total)} Total a pagar
          </p>
          <p className="text-xl text-gray-500 text-center font-bold">
            {formatearDinero(interesTotal)} de Interés
          </p>
          <p className="text-xl text-gray-500 text-center font-bold">
            {formatearDinero(pago)} Mensuales
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
