export default function Sect06WerkingVanGlucagon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Werking van glucagon</h2>
      <p>
        Glucagon doet metabool het tegenovergestelde van insuline. Het zorgt ervoor dat het lichaam <strong className="text-slate-900 dark:text-slate-100">glucose vrijmaakt</strong> en <strong className="text-slate-900 dark:text-slate-100">nieuwe glucose aanmaakt</strong>. Dat gebeurt vooral in de lever.
      </p>
      <p>
        Glucagon bindt aan de <strong className="text-slate-900 dark:text-slate-100">glucagonreceptor</strong>, een <strong className="text-slate-900 dark:text-slate-100">Gs-gekoppelde receptor</strong>. Hierdoor stijgt de intracellulaire <strong className="text-slate-900 dark:text-slate-100">cAMP-concentratie</strong> en wordt <strong className="text-slate-900 dark:text-slate-100">PKA</strong> geactiveerd. cAMP en PKA kunnen vervolgens enzymen activeren of remmen. Zo verschuift de stofwisseling richting glucoseproductie en energiemobilisatie.
      </p>
      <p>Glucagon stimuleert dus:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">glycogenolyse</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">gluconeogenese</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">vetzuuroxidatie</strong>
        </li>
      </ul>
      <p>En het remt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">vetzuursynthese</strong>
        </li>
        <li>processen die glucose opslaan of verbruiken</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Globale vergelijking tussen insuline en glucagon</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Proces</th>
              <th className="px-4 py-3 font-semibold">Insuline</th>
              <th className="px-4 py-3 font-semibold">Glucagon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Glycolyse</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
              <td className="px-4 py-3 align-top">Remt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Gluconeogenese</td>
              <td className="px-4 py-3 align-top">Remt</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Glycogenese</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
              <td className="px-4 py-3 align-top">Remt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Glycogenolyse</td>
              <td className="px-4 py-3 align-top">Remt</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Vetzuursynthese</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
              <td className="px-4 py-3 align-top">Remt</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vetzuuroxidatie</td>
              <td className="px-4 py-3 align-top">Remt</td>
              <td className="px-4 py-3 align-top">Stimuleert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
