export default function Sect02AlgemeneInleiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Algemene inleiding</h2>
      <p>
        De zuur-basebalans draait om het evenwicht tussen zuur en base in het lichaam. Daarbij spelen vooral de longen en de nieren een grote rol. De longen regelen de hoeveelheid CO2, en CO2 hangt direct samen met de zuurgraad. De nieren regelen vooral bicarbonaat (HCO3-) en de uitscheiding van zuur.
      </p>
      <p>
        Een stoornis heet respiratoir als de primaire verandering in de longen zit, en metabool als de primaire verandering samenhangt met bicarbonaat of zuur-basehuishouding via de nieren of het metabolisme.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Overzicht van de belangrijkste zuurbasestoornissen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stoornis</th>
                <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat gebeurt er primair?</th>
                <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden van oorzaken</th>
                <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klinische aandachtspunten</th>
                <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeling in hoofdlijnen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-3 py-3 font-medium align-top">Respiratoire acidose</td>
                <td className="px-3 py-3 align-top">CO2 stapelt zich op</td>
                <td className="px-3 py-3 align-top">COPD, longfibrose, verstikking, acute spierzwakte, astma-aanval</td>
                <td className="px-3 py-3 align-top">Hoofdpijn, tremor, coma</td>
                <td className="px-3 py-3 align-top">Oorzaak wegnemen, zo nodig beademing</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-3 py-3 font-medium align-top">Respiratoire alkalose</td>
                <td className="px-3 py-3 align-top">Te veel ventilatie, CO2 daalt</td>
                <td className="px-3 py-3 align-top">Longembolie, aspirine-intoxicatie, zwangerschap, psychogene hyperventilatie</td>
                <td className="px-3 py-3 align-top">Klachten van onderliggende aandoening, krampen, tetanie, duizeligheid, coma</td>
                <td className="px-3 py-3 align-top">Onderliggende oorzaak behandelen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-3 py-3 font-medium align-top">Metabole acidose</td>
                <td className="px-3 py-3 align-top">HCO3- daalt</td>
                <td className="px-3 py-3 align-top">Diarree, nierinsufficiëntie, renaal HCO3- verlies, lactaat, keto-acidose, intoxicaties</td>
                <td className="px-3 py-3 align-top">Ritmestoornissen, hyperventilatie, coma</td>
                <td className="px-3 py-3 align-top">Oorzaak behandelen, soms HCO3- geven</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-3 py-3 font-medium align-top">Metabole alkalose</td>
                <td className="px-3 py-3 align-top">HCO3- overschot blijft bestaan</td>
                <td className="px-3 py-3 align-top">Braken, diuretica, chloridetekort, hyperaldosteronisme, volumedepletie</td>
                <td className="px-3 py-3 align-top">Vaak weinig klachten</td>
                <td className="px-3 py-3 align-top">Volumetekort en chloridetekort corrigeren</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wanneer denk je bij een stoornis eerst aan de longen en wanneer aan de nieren?  Mini-antwoord: Bij een respiratoire stoornis ligt de primaire oorzaak in de ventilatie en CO2-verandering; bij een metabole stoornis zit het probleem vooral in bicarbonaat, zuurproductie of zuurverlies.
        </p>
      </div>
    </div>
  )
}
