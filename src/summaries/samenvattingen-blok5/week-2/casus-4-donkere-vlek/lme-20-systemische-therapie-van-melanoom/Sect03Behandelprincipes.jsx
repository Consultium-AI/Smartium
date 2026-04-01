export default function Sect03Behandelprincipes() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandelprincipes</h2>
      <p>
        Bij systemische behandeling is niet alleen het middel belangrijk, maar ook het doel van de behandeling. Een
        behandeling kan bijvoorbeeld bedoeld zijn om te genezen, om ziekte af te remmen, of om vóór of ná een operatie te
        worden gegeven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Behandelprincipes uitgelegd</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Principe
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Doel in de praktijk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Curatief</td>
              <td className="px-4 py-3 align-top">behandeling met als doel totale eradicatie van de maligniteit</td>
              <td className="px-4 py-3 align-top">genezing nastreven</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Palliatief</td>
              <td className="px-4 py-3 align-top">
                behandeling van uitgezaaide kanker om ziekte te controleren of te stabiliseren
              </td>
              <td className="px-4 py-3 align-top">kwaliteit van leven verbeteren en/of overleving verlengen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neo-adjuvant</td>
              <td className="px-4 py-3 align-top">behandeling vóór de operatie</td>
              <td className="px-4 py-3 align-top">micrometastasen al vóór de operatie aanpakken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Adjuvant</td>
              <td className="px-4 py-3 align-top">behandeling ná de operatie</td>
              <td className="px-4 py-3 align-top">resterende tumorcellen of microscopische uitzaaiingen verwijderen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Inductie</td>
              <td className="px-4 py-3 align-top">
                behandeling om een aanvankelijk niet-resectabele tumor toch resectabel te maken
              </td>
              <td className="px-4 py-3 align-top">de tumor operabel maken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk verschil is dat neo-adjuvant en inductie niet hetzelfde zijn.{'  '}
        Neo-adjuvante therapie geef je als de primaire tumor nog operabel is, terwijl inductietherapie bedoeld is om een
        aanvankelijk niet-operabele tumor alsnog operabel te maken.
      </p>
      <p className="text-slate-800 dark:text-slate-200 border-l-4 border-primary-400 pl-4 py-2 bg-primary-50/80 dark:bg-primary-500/10 rounded-r-lg">
        Aandachtsvraag: wat is nu het kernverschil tussen neo-adjuvant en adjuvant?{'  '}
        Mini-antwoord: neo-adjuvant is vóór de operatie, adjuvant is na de operatie.
      </p>
    </div>
  )
}
