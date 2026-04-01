export default function Sect06HemodialyseTechniek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">De dialysemachine</h3>
        <p className="mb-3">
          De dialysemachine zorgt ervoor dat bloed en dialysaat in de kunstnier bij elkaar komen, zodat daadwerkelijke dialyse plaatsvindt. De machine regelt de aanvoer- en afvoerdrukken en heeft veiligheidsvoorzieningen, zoals een luchtdetector.
        </p>
        <p className="mb-2">Een standaardmachine heeft ongeveer:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>een dialysaatflow van 350–500 ml/min;</li>
          <li>een bloedflow van ongeveer 250 ml/min.</li>
        </ul>
        <p>
          Bij een sessie van 4 uur komt dit neer op ongeveer 84–120 liter dialysaat. Dat betekent dat de dialysevloeistof niet simpel uit zakken kan komen; er is een speciale waterinstallatie nodig die kraanwater omzet in een ultrazuivere vloeistof.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">De kunstnier</h3>
        <p className="mb-3">
          De kunstnier is de plek waar de uitwisseling echt plaatsvindt. Moderne filters bevatten duizenden kleine holle buisjes van een kunstmatig polymeer, vaak polysulfon. De grootte wordt uitgedrukt in dialyseoppervlak en is ongeveer 1,3–1,8 m².
        </p>
        <p>
          De kunstnier werkt via het tegenstroomprincipe, zodat diffusie zo goed mogelijk kan doorgaan.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Dialysevloeistof</h3>
        <p className="mb-3">
          Dialysevloeistof bevat meestal een redelijk fysiologische hoeveelheid elektrolyten. De grote uitzondering is het bicarbonaatgehalte, dat hoger is dan normaal. Daarmee wordt namelijk een grote hoeveelheid bicarbonaat toegediend om metabole acidose te bestrijden.
        </p>
        <p>
          Belangrijk is dat dialyse ook stoffen kan toedienen. Dat laat zien dat het proces vooral draait om diffusie. Daarom kan het bij een patiënt met ernstige hyponatriëmie gevaarlijk zijn om te dialyseren met een standaardvloeistof: dan kan in korte tijd veel natrium worden uitgewisseld.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Antistolling</h3>
        <p>
          Omdat bloed in contact komt met kunststofleidingen en de kunstnier, zal het gaan stollen. Daarom is tijdens elke hemodialyse antistolling nodig, vaak met laagmoleculairgewichtsheparine. Dit geeft een iets verhoogd risico op bloeding, maar zonder antistolling kan de dialyse niet effectief verlopen.
        </p>
      </div>
    </div>
  )
}
