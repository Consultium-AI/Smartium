export default function Sect03OntstaanswijzeNeuropathie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ontstaanswijze: neurogeen, autonoom en motorisch</h2>
      <p>
        Bij de diabetische voet spelen neuropathieën een grote rol. Neuropathie betekent zenuwschade. Er worden drie vormen onderscheiden:
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Vormen van neuropathie bij de diabetische voet</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vorm</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg voor de voet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Sensibele neuropathie</td>
                <td className="px-4 py-3">Verminderde pijn-, tast- en temperatuurszin</td>
                <td className="px-4 py-3">Trauma wordt niet gevoeld; wondjes blijven onopgemerkt</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Autonome neuropathie</td>
                <td className="px-4 py-3">Verminderde zweetsecretie en verminderde bloedstroomregulatie</td>
                <td className="px-4 py-3">Droge huid met kloofjes, soms oedeem</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Motorische neuropathie</td>
                <td className="px-4 py-3">Zwakte van voetspieren, standsafwijkingen, coördinatiestoornissen</td>
                <td className="px-4 py-3">Drukpunten, afwijkende voetstand en meer risico op ulcera</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sensibele neuropathie</h3>
      <p>
        Bij sensibele neuropathie voelt de patiënt pijn, tast en temperatuur minder goed. Daardoor merkt iemand druk of klein trauma aan de voet soms niet op. Een wondje of drukplek kan dus bestaan zonder dat de patiënt dit goed ervaart.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Autonome neuropathie</h3>
      <p>
        Bij autonome neuropathie zweet de huid minder. De huid wordt droog en kan kloofjes krijgen. Ook de regulatie van de bloedstroom is verminderd, waardoor oedeem kan ontstaan. Droge, kwetsbare huid is gevoeliger voor beschadiging en infectie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Motorische neuropathie</h3>
      <p>
        Motorische neuropathie geeft zwakte van de voetspieren. Daardoor ontstaan standsafwijkingen, zoals een klauwteen of andere vervormingen van de voet. Ook kunnen coördinatiestoornissen optreden. Het gevolg is dat bepaalde plekken van de voet meer druk krijgen.
      </p>
    </div>
  )
}
