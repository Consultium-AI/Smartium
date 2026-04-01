export default function Sect02TnmClassificatieEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">TNM-classificatie bij longkanker</h2>
      <p>
        Bij longkanker wordt de uitgebreidheid van de ziekte ingedeeld met de <span className="font-semibold">TNM-classificatie</span>. Dit is een internationale standaard voor tumorclassificatie. De letters staan voor:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">T</span> = <span className="font-semibold">Tumor</span>: grootte van de primaire tumor en lokale uitbreiding
        </li>
        <li>
          <span className="font-semibold">N</span> = <span className="font-semibold">Nodes</span>: betrokkenheid van regionale lymfeklieren
        </li>
        <li>
          <span className="font-semibold">M</span> = <span className="font-semibold">Metastases</span>: metastasen op afstand
        </li>
      </ul>
      <p>
        De combinatie van T, N en M bepaalt het <span className="font-semibold">stadium</span> van de ziekte. Dat is belangrijk, omdat dit meebepalend is voor de <span className="font-semibold">behandelopties</span> en de <span className="font-semibold">prognose</span>. Denk hierbij aan keuzes zoals chirurgie, chemoradiatie of palliatieve behandeling.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Overzicht van TNM bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat beoordeel je?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">T</td>
              <td className="px-4 py-3 align-top">Primaire tumor</td>
              <td className="px-4 py-3 align-top">Grootte en lokale invasie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">N</td>
              <td className="px-4 py-3 align-top">Regionale lymfeklieren</td>
              <td className="px-4 py-3 align-top">Aanwezigheid en ligging van aangedane klieren</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">M</td>
              <td className="px-4 py-3 align-top">Metastasen op afstand</td>
              <td className="px-4 py-3 align-top">Wel of geen uitzaaiingen buiten de thorax</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span> Waarom is TNM zo belangrijk?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> Omdat het helpt bepalen hoe uitgebreid de kanker is en welke behandeling passend is.
      </p>
    </div>
  )
}
