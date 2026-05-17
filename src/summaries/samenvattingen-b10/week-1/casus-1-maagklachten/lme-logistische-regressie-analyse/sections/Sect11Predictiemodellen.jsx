export default function Sect11Predictiemodellen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Predictiemodellen</h2>
      <p>
        Logistische regressie wordt vaak gebruikt om <strong className="text-slate-900 dark:text-slate-100">predictiemodellen</strong> te maken. Daarmee schat je per patiënt de kans op een bepaalde uitkomst.
      </p>
      <p>Voorbeelden van toepassingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>risico op een hartinfarct in de komende 10 jaar</li>
        <li>kans op herstel</li>
        <li>kans op falen van een behandeling</li>
      </ul>
      <p>Bekende voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Framingham Risk Score</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">APACHE-score</strong>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Wells-score</strong>
        </li>
      </ul>
      <p>
        Een predictiemodel geeft dus een kans, geen zekerheid. Als een model bijvoorbeeld 90% kans op regen voorspelt,
        betekent dat nog niet dat het ook echt gaat regenen.
      </p>
      <p>Artsen kunnen zulke modellen gebruiken om:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hoog-risicopatiënten te herkennen</li>
        <li>extra diagnostiek aan te vragen</li>
        <li>patiënten beter te informeren</li>
        <li>behandelingen te kiezen</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Validatie van predictiemodellen</h3>
      <p>Een goed model moet goed werken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>in de dataset zelf: <strong className="text-slate-900 dark:text-slate-100">interne validatie</strong></li>
        <li>bij nieuwe patiënten: <strong className="text-slate-900 dark:text-slate-100">externe validatie</strong></li>
      </ul>
      <p>Twee belangrijke eigenschappen zijn:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Discriminatie</strong>
          <br />
          Kan het model patiënten mét en zonder uitkomst goed onderscheiden?
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Calibratie</strong>
          <br />
          Komen de voorspelde kansen overeen met de werkelijke kansen?
        </li>
      </ol>
    </div>
  )
}
