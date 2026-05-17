export default function Sect02WatBedoelenWe() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Reflux bij kinderen: wat bedoelen we ermee?</h2>
      <p>
        Bij kinderen komt maaginhoud soms via de mond weer terug. Ouders zien dat vaak als een teken van ziekte of
        problemen van maag of darmen. Toch is dat bij zuigelingen lang niet altijd zo. Het teruggeven van kleine beetjes
        voeding is in de eerste levensmaanden juist heel gebruikelijk. Het is daarom belangrijk om goed onderscheid te
        maken tussen <strong className="text-slate-900 dark:text-slate-100">normale reflux</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">een afwijkende vorm van spugen of braken</strong>.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke begrippen bij reflux</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Begrip
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betekenis
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Gastro-oesofageale reflux (GOR)</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Terugvloed van maaginhoud in de slokdarm, vaak met regurgitatie. Dit is een normaal fysiologisch proces
                  dat meerdere keren per dag kan optreden bij gezonde kinderen van alle leeftijden, meestal na de maaltijd.
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Gastro-oesofageale refluxziekte (GORZ)</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Reflux van maaginhoud die leidt tot hinderlijke klachten die het dagelijks leven beïnvloeden en/of tot
                  complicaties, zoals overmatig huilen, prikkelbaarheid, voedselweigering en groeivertraging.
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Regurgitatie</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Spontaan, onvrijwillig terugvloeien van voeding uit de maag tot in de mond, meestal in de vorm van
                  “teruggeven”. Dit gebeurt vooral in het eerste uur na de voeding en kost geen moeite.
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Braken</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Krachtig uitspugen van maaginhoud nadat het braakcentrum is geactiveerd door een trigger, zoals een giftige
                  stof, ziekte, een probleem van het evenwichtsorgaan of verhoogde druk in de hersenen. Vaak gaat dit vooraf
                  door misselijkheid, bleekheid, zweten en kokhalzen.
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">
                  <strong className="text-slate-900 dark:text-slate-100">Ruminatie</strong>
                </td>
                <td className="px-4 py-3 align-top">
                  Vrijwillig, maar soms ook onbewust, omhoogwerken van voeding vanuit de maag tot in de mond. De voeding kan
                  daarna opnieuw worden gekauwd en doorgeslikt of weer worden uitgespuugd.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          Aandachtsvraag: <strong className="text-slate-900 dark:text-amber-50">Is reflux altijd ziekelijk?</strong>
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> Nee. Bij gezonde zuigelingen kan het
          teruggeven van kleine beetjes voeding heel normaal zijn.
        </p>
      </div>
    </div>
  )
}
