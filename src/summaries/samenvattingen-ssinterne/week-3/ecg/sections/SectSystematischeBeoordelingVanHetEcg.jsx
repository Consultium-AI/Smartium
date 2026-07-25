import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systematische beoordeling van het ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG moet altijd stap voor stap worden beoordeeld. Zo voorkom je dat je kleine afwijkingen mist doordat grote afwijkingen meteen de aandacht trekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het stappenplan bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Ritme`}</Inline></li>
        <li><Inline>{`Frequentie`}</Inline></li>
        <li><Inline>{`Geleidingstijden`}</Inline></li>
        <li><Inline>{`Elektrische hartas`}</Inline></li>
        <li><Inline>{`P-top morfologie`}</Inline></li>
        <li><Inline>{`QRS-morfologie`}</Inline></li>
        <li><Inline>{`ST-segment en T-top`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna vergelijk je het ECG zo mogelijk met een ouder ECG en trek je een conclusie.`}</Inline></p>
    </div>
  )
}
