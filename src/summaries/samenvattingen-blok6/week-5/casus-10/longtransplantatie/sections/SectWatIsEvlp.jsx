import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is EVLP?`}</Inline></SubHeading>
      <PBody text={`**EVLP** betekent **Ex-Vivo Long Perfusie**. Daarbij wordt de donorlong buiten het lichaam aangesloten op een perfusiesysteem. De long wordt doorbloed met een speciale vloeistof van 37 graden en tegelijk beademd.`} />
      <p className="leading-relaxed"><Inline>{`Gedurende ongeveer 4 uur wordt de long beoordeeld op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gaswisseling`}</Inline></li>
        <li><Inline>{`zuurstofopname`}</Inline></li>
        <li><Inline>{`vaatweerstand`}</Inline></li>
        <li><Inline>{`gewicht`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms verbetert een marginale long in die periode genoeg om toch bruikbaar te worden. Soms gebeurt dat niet, en dan wordt de long alsnog niet gebruikt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`EVLP kan dus helpen om marginale donorlongen te optimaliseren, longembolieën te behandelen of te verwijderen, en een geschikte long tijdelijk te bewaren totdat het operatieteam klaar is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. EVLP in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Betekenis"], ["Naam", "Ex-Vivo Long Perfusie"], ["Doel", "donorlong buiten het lichaam beoordelen en optimaliseren"], ["Duur", "ongeveer 4 uur"], ["Beoordeling", "gaswisseling, O2-opname, vaatweerstand, gewicht"], ["Mogelijke uitkomst", "long wordt bruikbaar of juist afgekeurd"]]} />
    </div>
  )
}
