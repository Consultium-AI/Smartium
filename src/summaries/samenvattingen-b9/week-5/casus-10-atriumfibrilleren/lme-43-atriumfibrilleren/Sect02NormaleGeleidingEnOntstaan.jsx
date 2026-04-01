export default function Sect02NormaleGeleidingEnOntstaan() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Normale geleiding en het ontstaan van atriumfibrilleren</h2>
      <p>
        In een gezond hart ontstaat de elektrische prikkel in de <span className="font-semibold">sinusknoop</span>. Deze ligt in het rechter atrium en fungeert als de natuurlijke pacemaker. De prikkel verspreidt zich vervolgens rustig over de atria, waardoor deze gecoördineerd samentrekken. Daarna bereikt het signaal de <span className="font-semibold">AV-knoop</span>, die de impuls kort vertraagt. Dat is belangrijk, omdat de ventrikels daardoor tijd krijgen om zich te vullen. Via de bundel van His en de Purkinjevezels gaat het signaal daarna snel naar de ventrikels, zodat die krachtig kunnen contraheren.
      </p>
      <p>
        <span className="font-semibold">Aandachtspunt:</span> waarom is de AV-knoop zo belangrijk?{' '}
        <br />
        <span className="font-semibold">Kort antwoord:</span> hij werkt als een filter en vertrager, zodat de ventrikels eerst goed kunnen vullen.
      </p>
      <p>
        Bij <span className="font-semibold">atriumfibrilleren</span> is die georganiseerde geleiding verdwenen. Het hartritme wordt dan niet meer bepaald door één enkele impuls uit de sinusknoop, maar door meerdere, rondcirkelende elektrische golfjes:{' '}
        <span className="font-semibold">multiple meandering re-entry wavelets</span>. Daarnaast kunnen <span className="font-semibold">snelle, focale triggers</span> AF op gang brengen, vaak afkomstig uit de <span className="font-semibold">longvenen</span>. De atria worden dan extreem snel geactiveerd, met frequenties van ongeveer{' '}
        <span className="font-semibold">300 tot 600 slagen per minuut</span>. Daardoor ontstaat geen gecoördineerde contractie meer: de atria “fibrilleren”, oftewel trillen chaotisch.
      </p>
      <p>
        Een handige visuele vergelijking is die van een rustig meer met één enkele druppel versus een regenstorm. Bij normaal ritme is er één duidelijke golf die zich netjes verspreidt. Bij AF is het oppervlak chaotisch in beweging, zonder duidelijk start- of eindpunt.
      </p>
    </div>
  )
}
