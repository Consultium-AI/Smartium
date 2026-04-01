export default function Sect06HoeLeertEenDeepLearningAlgoritme() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe leert een Deep Learning-algoritme?</h2>
      <p>
        Een Deep Learning-systeem moet getraind worden met heel veel beelden. Het heeft daarbij drie soorten informatie
        nodig:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>beelden met de afwijking die je wilt herkennen</li>
        <li>beelden zonder die afwijking, of met andere afwijkingen</li>
        <li>labels, dus de juiste classificatie van elk beeld</li>
      </ul>
      <p>
        Bij de ontwikkeling van SkinVision zijn meer dan 100.000 beelden gebruikt. Het maken van zo’n dataset kost veel
        tijd en vraagt zorgvuldigheid.
      </p>
      <p>Daarbij zijn twee dingen heel belangrijk:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De kwaliteit van de dataset</h3>
      <p>
        De dataset moet passen bij het doel. De beelden moeten representatief zijn voor de huidafwijking én voor de
        mensen voor wie de app bedoeld is. Ook maakt het uit welke camera is gebruikt, bijvoorbeeld een smartphone of een
        dermatoscoop, en welke kleurinstellingen daarbij horen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De kwaliteit van de labels</h3>
      <p>
        De labels moeten betrouwbaar zijn. De meest betrouwbare standaard is histopathologische beoordeling. Soms wordt
        daarbij het oordeel van meerdere pathologen gecombineerd, omdat ook pathologen het niet altijd meteen eens zijn
        over dezelfde uitslag.
      </p>
    </div>
  )
}
