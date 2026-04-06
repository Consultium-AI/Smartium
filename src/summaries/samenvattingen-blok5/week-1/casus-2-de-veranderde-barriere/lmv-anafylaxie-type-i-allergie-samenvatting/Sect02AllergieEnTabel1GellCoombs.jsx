export default function Sect02AllergieEnTabel1GellCoombs() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Allergie en plaats van anafylaxie binnen allergische reacties
      </h2>
      <p>
        Een allergie is een veranderde reactiviteit van de gastheer bij een tweede of volgend contact met een stof. Daarvoor
        is sensibilisatie nodig: het immuunsysteem moet de stof dus eerst “leren kennen” voordat er bij een volgend contact
        een allergische reactie kan ontstaan.
      </p>
      <p>Binnen de indeling van Gell en Coombs worden vier typen allergische reacties onderscheiden:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Typen allergische reacties volgens Gell en Coombs
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type I</td>
              <td className="px-4 py-3 align-top">anafylactische type</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type II</td>
              <td className="px-4 py-3 align-top">cytotoxie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type III</td>
              <td className="px-4 py-3 align-top">immuuncomplex-gemedieerd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type IV</td>
              <td className="px-4 py-3 align-top">contactallergie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In deze module ligt de nadruk op type I reacties en op anafylaxie. Type I reacties zijn snel, meestal binnen een half
        uur, en zijn IgE-gemedieerd. Mestcellen spelen daarbij een centrale rol. Na activatie van deze cellen komen mediatoren
        vrij, zoals histamine, prostaglandinen en serotonine. Dat leidt onder andere tot chemotaxis, vasodilatatie, oedeem,
        microthrombi en bronchoconstrictie.
      </p>
      <p>Belangrijke allergeengroepen bij type I reacties zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>inhalatieallergenen</li>
        <li>voedselallergenen</li>
        <li>medicamenten</li>
        <li>insectensteken, zoals van wesp, bij, hommel en daas</li>
      </ul>
    </div>
  )
}
