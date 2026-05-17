export default function Sect04WaaromGeenLineaireRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Waarom geen lineaire regressie bij een binaire uitkomst?
      </h2>
      <p>Lineaire regressie lijkt soms handig, maar voor binaire uitkomsten heeft dit model belangrijke problemen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Een rechte lijn is niet begrensd. De uitkomst kan dus voorspeld worden als kleiner dan 0 of groter dan 1, en dat
          kan niet bij een kans.
        </li>
        <li>De spreiding is niet overal gelijk. Bij kansen rond 50% is de variatie groter dan bij heel kleine of heel grote kansen.</li>
        <li>De aanname van normaal verdeelde fouten past niet goed bij een uitkomst die alleen 0 of 1 kan zijn.</li>
      </ol>
      <p>Daarom gebruik je bij een binaire uitkomst liever logistische regressie.</p>
      <p>
        Kort samengevat: logistische regressie zorgt ervoor dat de voorspelde kans altijd tussen 0 en 1 blijft.
      </p>
    </div>
  )
}
