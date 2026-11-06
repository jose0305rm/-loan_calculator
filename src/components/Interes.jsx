// Panel para configurar como se calcula el interes del prestamo
export default function Interes({ config, setConfig }) {
  const { modo, tasa, periodo, metodo } = config;

  // actualiza solo la propiedad que cambio
  function actualizar(campo, valor) {
    setConfig({ ...config, [campo]: valor });
  }

  const claseBoton = (activo) =>
    `flex-1 p-2 rounded-lg font-bold border transition-colors ${
      activo
        ? "bg-indigo-600 text-white border-indigo-600"
        : "bg-white text-gray-500 border-gray-300 hover:border-indigo-600"
    }`;

  return (
    <div className="my-8">
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Tipo de <span className="text-indigo-600">Interés</span>:
      </h2>

      {/* selector de modo */}
      <div className="flex gap-2 mt-5">
        <button
          type="button"
          className={claseBoton(modo === "automatico")}
          onClick={() => actualizar("modo", "automatico")}
        >
          Automático
        </button>
        <button
          type="button"
          className={claseBoton(modo === "personalizado")}
          onClick={() => actualizar("modo", "personalizado")}
        >
          Personalizado
        </button>
      </div>

      {modo === "automatico" ? (
        <p className="mt-4 text-sm text-gray-500 text-center">
          El interés se calcula según la cantidad solicitada y el plazo elegido.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {/* tasa de interes */}
          <div>
            <label
              htmlFor="tasa"
              className="block text-gray-500 text-center font-bold mb-2"
            >
              Tasa de interés (%)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                className="flex-1 h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                min={0}
                max={100}
                step={0.5}
                value={tasa}
                onChange={(e) => actualizar("tasa", +e.target.value)}
              />
              <input
                id="tasa"
                type="number"
                className="w-24 p-2 bg-white border border-gray-700 rounded-lg text-center text-xl font-bold"
                min={0}
                step={0.1}
                value={tasa}
                onChange={(e) =>
                  actualizar("tasa", Math.max(0, +e.target.value || 0))
                }
              />
            </div>
          </div>

          {/* periodo de la tasa */}
          <div>
            <label
              htmlFor="periodo"
              className="block text-gray-500 text-center font-bold mb-2"
            >
              La tasa es
            </label>
            <select
              id="periodo"
              className="w-full p-2 bg-white border border-gray-700 rounded-lg text-center text-xl font-bold"
              value={periodo}
              onChange={(e) => actualizar("periodo", e.target.value)}
            >
              <option value="anual">Anual</option>
              <option value="mensual">Mensual</option>
              <option value="total">Total (sobre todo el préstamo)</option>
            </select>
          </div>

          {/* metodo de calculo */}
          {periodo !== "total" && (
            <div>
              <label
                htmlFor="metodo"
                className="block text-gray-500 text-center font-bold mb-2"
              >
                Método de cálculo
              </label>
              <select
                id="metodo"
                className="w-full p-2 bg-white border border-gray-700 rounded-lg text-center text-xl font-bold"
                value={metodo}
                onChange={(e) => actualizar("metodo", e.target.value)}
              >
                <option value="simple">Interés simple</option>
                <option value="frances">Cuota fija (amortización)</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
