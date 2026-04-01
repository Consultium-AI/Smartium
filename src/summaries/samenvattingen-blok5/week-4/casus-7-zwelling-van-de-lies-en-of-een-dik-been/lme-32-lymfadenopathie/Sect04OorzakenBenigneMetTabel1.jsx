export default function Sect04OorzakenBenigneMetTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken van lymfklierzwelling</h2>
      <p>De oorzaken worden grofweg verdeeld in benigne en maligne aandoeningen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Benigne oorzaken</h3>
      <p>Benigne oorzaken zijn onder andere infecties en niet-infectieuze aandoeningen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Benigne oorzaken van lymfklierzwelling</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Groep</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Infectieus viraal</td>
              <td className="p-3">Mononucleosis infectiosa, EBV, cytomegalovirus, HIV</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Infectieus bacterieel</td>
              <td className="p-3">Streptokokken, stafylokokken, tuberculose, kattenkrabziekte</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Infectieus parasitair</td>
              <td className="p-3">Toxoplasmose, lues</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Niet-infectieus</td>
              <td className="p-3">
                Sarcoïdose, auto-immuunziekten zoals systemische lupus erythematodes en reumatoïde artritis, geneesmiddelen zoals hydantoïnederivaten
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
