import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van niet-spierinvasief blaaskarcinoom`}</Inline></SubHeading>
      <PBody text={`De behandeling van niet-spierinvasief blaaskanker bestaat uit een **TURBT** met daarna een blaasspoeling. De TURBT heeft twee doelen:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`diagnostisch: bepalen van T-stadium en graad;`}</Inline></li>
        <li><Inline>{`therapeutisch: de tumor zo compleet mogelijk verwijderen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna volgt een behandeling die afhangt van het risico op progressie.`}</Inline></p>
      <PBody text={`**Tabel 4. Behandeling van niet-spierinvasief blaaskarcinoom**`} />
      <DataTable rows={[["Risicogroep", "Behandeling"], ["Laag", "Eenmalige blaasspoeling met Mitomycine C direct na TURBT"], ["Intermediair", "Mitomycine C-spoelschema"], ["Hoog", "BCG-spoelingen gedurende 1 tot 3 jaar"], ["Heel hoog", "BCG-spoelingen tot 3 jaar of directe radicale cystectomie"]]} />
      <p className="leading-relaxed"><Inline>{`BCG-spoelingen worden dus gebruikt bij hogere risicogroepen om de kans op recidief en progressie te verkleinen.`}</Inline></p>
    </div>
  )
}
