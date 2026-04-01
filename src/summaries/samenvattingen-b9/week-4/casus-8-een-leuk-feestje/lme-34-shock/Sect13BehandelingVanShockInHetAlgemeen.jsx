export default function Sect13BehandelingVanShockInHetAlgemeen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van shock in het algemeen</h2>
      <p>
        De belangrijkste regel bij shock is: <span className="font-semibold">los de oorzaak op</span>. Daarnaast zijn er maatregelen om tijd te winnen en de circulatie tijdelijk te ondersteunen. De behandelingsstrategieën zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">vasopressie</span>: bloedvaten vernauwen voor hogere perifere weerstand en vatt tonus, zodat de bloeddruk en veneuze return stijgen;</li>
        <li><span className="font-semibold">inotropie</span>: betere contractiliteit van het hart;</li>
        <li><span className="font-semibold">extra vocht</span>: voor groter bloedvolume;</li>
        <li><span className="font-semibold">plasmamedicatie</span>: voor verkleinen van het bloedvolume;</li>
        <li><span className="font-semibold">vasodilatatoren</span>: voor verwijden van de bloedvaten;</li>
        <li>uiteindelijk blijft het doel steeds hetzelfde: <span className="font-semibold">weefselperfusie verbeteren</span>, zodat zuurstofvraag en zuurstofaanbod weer in balans komen.</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandacht-vraag:</span>
          {' '}
          Moeten we bij shock vooral aan de bloeddruk denken?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Niet alleen. Het uiteindelijke doel is verbetering van de weefselperfusie. De bloeddruk is daarbij belangrijk, maar niet het enige dat telt.
        </p>
      </div>
      <p>
        Bij shock wordt ook teruggekeken naar een parameter die steeds centraal staat: het <span className="font-semibold">slagvolume</span>. Bij alle vormen van shock is dat uiteindelijk te laag. De behandelingen moeten dus uiteindelijk leiden tot een beter slagvolume en daarmee tot betere perfusie.
      </p>
    </div>
  )
}
