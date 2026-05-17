export default function Sect02WatIsAdvancedEndoscopy () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is advanced endoscopy?</h2>
      <p>
        Endoscopie is een techniek waarbij een MDL-arts met een flexibele slang met camera in het maag-darmkanaal kijkt.
        Daarmee kun je afwijkingen zien, zoals ontstekingen, zweren of poliepen, en soms ook een biopt nemen. Bij advanced
        endoscopy gaat het een stap verder: de endoscoop wordt niet alleen gebruikt om te kijken, maar ook om gericht te
        behandelen of ingrepen te doen in en vanuit het maag-darmstelsel. Het zijn meestal technisch complexe procedures
        die door speciaal opgeleide MDL-artsen worden uitgevoerd.
      </p>
      <p>Binnen de advanced endoscopy worden twee hoofdgroepen onderscheiden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Luminale advanced endoscopy</strong>: behandelingen in
          het lumen van het maag-darmkanaal zelf, dus in de slokdarm, maag, dunne darm en colon.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">HPB advanced endoscopy</strong>: behandelingen rond
          de <strong className="text-slate-900 dark:text-slate-100">hepar</strong> (lever),{' '}
          <strong className="text-slate-900 dark:text-slate-100">pancreas</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">biliaire</strong> structuren, dus de galwegen. HPB staat
          voor <strong className="text-slate-900 dark:text-slate-100">hepar, pancreas, biliair</strong>.
        </li>
      </ul>
      <p>
        Bij luminale advanced endoscopy werk je op of in de wand van het maag-darmkanaal. Het doel is vaak het behandelen
        van premaligne of vroege maligne afwijkingen, het verwijderen van complexe afwijkingen of het behandelen van
        vernauwingen. Voorbeelden zijn EMR en ESD voor het verwijderen van mucosale afwijkingen, hemostase bij bloedingen,
        dilatatie van stricturen en het plaatsen van stents bij obstructie.
      </p>
      <p>
        HPB advanced endoscopy richt zich juist op aandoeningen van de galwegen, pancreas en lever. Binnen deze groep zijn{' '}
        <strong className="text-slate-900 dark:text-slate-100">EUS</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">ERCP</strong> de belangrijkste technieken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Kernverschil tussen EUS en ERCP</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Techniek</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voluit</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Hoe werkt het?</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijkste doel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">EUS</td>
              <td className="p-3 align-top">endoscopische echografie</td>
              <td className="p-3 align-top">Endoscopie gecombineerd met echografie</td>
              <td className="p-3 align-top">
                Diagnostiek en steeds vaker ook interventies rond pancreas, galwegen en omliggende structuren
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">ERCP</td>
              <td className="p-3 align-top">endoscopische retrograde cholangiopancreaticografie</td>
              <td className="p-3 align-top">Invasieve endoscopie via de papil van Vater, met contrast en röntgen</td>
              <td className="p-3 align-top">Vooral behandeling van galwegproblemen, zoals stenen en stenosen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waarom zijn EUS en ERCP bijzonder?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Kort antwoord:</strong> Omdat de endoscoop niet alleen wordt gebruikt om te
          kijken, maar ook om heel gericht beeldvorming, diagnostiek en behandeling rond de galwegen en pancreas mogelijk
          te maken.
        </p>
      </div>
    </div>
  )
}
