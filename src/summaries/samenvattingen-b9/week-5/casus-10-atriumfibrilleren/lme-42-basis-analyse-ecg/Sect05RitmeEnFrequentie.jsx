export default function Sect05RitmeEnFrequentie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ritme en frequentie</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Sinusritme</h3>
      <p>Om van sinusritme te spreken, moeten drie dingen kloppen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>er is een P-top voor elk QRS-complex;</li>
        <li>de P-top is positief in afleiding II;</li>
        <li>de P-top is negatief in aVR.</li>
      </ol>
      <p>
        Dat past bij geleiding vanuit de sinusknoop. In afleiding II zie je het ritme vaak mooi, omdat die afleiding in de loop van de normale stroom kijkt.
      </p>
      <p>
        <span className="font-semibold">Aandacht-vraagje:</span> wat is het kenmerk van een sinusritme?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> een P-top vóór elk QRS, positief in II en negatief in aVR.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Regelmatig of onregelmatig?</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sinusritme: het ritme is regelmatig.</li>
        <li>Sinusaritmie: de frequentie varieert periodiek.</li>
        <li>Atriumfibrilleren: het ritme is totaal onregelmatig.</li>
      </ul>
      <p>
        Bij een jonge gezonde persoon kan een onregelmatig sinusritme passen bij respiratoire sinusaritmie. Dan stijgt de hartslag bij inademing en daalt die bij uitademing. Dat is normaal, zolang er wel gewoon P-toppen vóór elk QRS zijn.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Frequentie bepalen</h3>
      <p>Er zijn twee handige methodes:</p>
      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">1. De 300-regel</h4>
      <p>Bij een regelmatig ritme tel je het aantal grote vakjes tussen twee R-toppen en doe je:</p>
      <p>HF ≈ 300 / aantal grote vakjes</p>
      <p>Bij 4 grote vakjes is de hartfrequentie dus ongeveer 75/min.</p>
      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">2. De 10-secondenregel</h4>
      <p>
        Bij een onregelmatig ritme, zoals atriumfibrilleren, werkt de 300-regel niet goed. Dan gebruik je een ritmestrook van 10 seconden:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>tel het aantal QRS-complexen in die 10 seconden;</li>
        <li>vermenigvuldig met 6.</li>
      </ol>
      <p>Bij 13 QRS-complexen is de hartfrequentie dus 78/min.</p>
    </div>
  )
}
