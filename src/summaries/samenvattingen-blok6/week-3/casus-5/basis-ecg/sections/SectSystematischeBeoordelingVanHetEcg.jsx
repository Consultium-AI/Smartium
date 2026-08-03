import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systematische beoordeling van het ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG moet je altijd stap voor stap beoordelen. Zo voorkom je dat je een kleine afwijking mist doordat een grote afwijking meteen opvalt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het stappenplan bestaat uit 7 stappen, met daarna nog 2 extra punten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Ritme`}</Inline></li>
        <li><Inline>{`Frequentie`}</Inline></li>
        <li><Inline>{`Geleidingstijden`}</Inline></li>
        <li><Inline>{`Elektrische hartas`}</Inline></li>
        <li><Inline>{`P-top morfologie`}</Inline></li>
        <li><Inline>{`QRS-morfologie`}</Inline></li>
        <li><Inline>{`ST-segment en T-top morfologie`}</Inline></li>
        <li><Inline>{`Vergelijking met een oud ECG`}</Inline></li>
        <li><Inline>{`Conclusie`}</Inline></li>
      </ul>
    </div>
  )
}
