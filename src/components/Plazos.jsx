export default function Plazos({ meses, fn }) {
  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar:
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border border-gray-700 rounded-lg text-center text-xl font-bold"
        value={meses}
        onChange={fn}
      >
        <option value="3">3 Meses</option>
        <option value="6">6 Meses</option>
        <option value="9">9 Meses</option>
        <option value="12">12 Meses</option>
        <option value="18">18 Meses</option>
        <option value="24">24 Meses</option>
        <option value="36">36 Meses</option>
        <option value="48">48 Meses</option>
        <option value="60">60 Meses</option>
      </select>
    </>
  );
}
