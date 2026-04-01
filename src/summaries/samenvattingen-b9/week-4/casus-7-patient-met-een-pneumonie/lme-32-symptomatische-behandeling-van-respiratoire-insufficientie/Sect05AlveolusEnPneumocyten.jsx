export default function Sect05AlveolusEnPneumocyten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De alveolus, type I pneumocyt en type II pneumocyt</h2>
      <p>
        Een alveolus is een klein gaswisselingsstructuurtje. De alveolocapillaire membraan bestaat uit drie lagen: de type I pneumocyt, het interstitium en het capillaire endotheel. Gaswisseling vindt plaats door diffusie over deze drie lagen heen.
      </p>
      <p>
        De type I pneumocyt vormt dus eigenlijk de alveolocapillaire membraan. Tussen de type I pneumocyt en de capillair ligt het interstitium, een soort bindweefsel ertussenin. De capillair zelf bestaat uit een laag endotheelcellen.
      </p>
      <p>
        De alveolus blijft goed open dankzij de type II pneumocyt. Deze produceert surfactant. Surfactant werkt een beetje als zeep: het heeft een hydrofiele kop die gericht is naar water en een hydrofiele staart die gericht is naar lucht. Daardoor verlaagt surfactant de oppervlaktespanning in de alveolus en voorkomt het collaps.
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Opbouw van de alveolus en functie van de onderdelen</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Type I pneumocyt</td>
              <td className="px-4 py-3 align-top">Vormt samen met de andere lagen de gaswisselingsbarrière</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Interstitium</td>
              <td className="px-4 py-3 align-top">Tussenlaag van bindweefsel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Endotheel van de capillair</td>
              <td className="px-4 py-3 align-top">Binnenwand van het bloedvat</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Type II pneumocyt</td>
              <td className="px-4 py-3 align-top">Maakt surfactant</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Surfactant</td>
              <td className="px-4 py-3 align-top">Verlaagt oppervlaktespanning en voorkomt collaps</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De totale oppervlakte van alle alveolocapillaire membranen samen is 70–100 m². Daardoor kan gaswisseling zeer efficiënt verlopen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is surfactant zo belangrijk?</h3>
      <p>
        Alveoli zijn in feite gasbelletjes in water. Daardoor is er altijd oppervlaktespanning aan de rand van de alveolus. De kleinste alveoli hebben de neiging om te collaberen; lucht zou dan naar plekken met minder oppervlaktespanning stromen. Surfactant voorkomt dat.
      </p>
      <p>
        Bij ziekten zoals pneumonie en het acute respiratory distress syndrome (ARDS) raken type II pneumocyten beschadigd door inflammatie en cytokines. Daardoor neemt de surfactantproductie af. De alveoli collapsen dan makkelijker en de longen worden minder luchthoudend.
      </p>
    </div>
  )
}
