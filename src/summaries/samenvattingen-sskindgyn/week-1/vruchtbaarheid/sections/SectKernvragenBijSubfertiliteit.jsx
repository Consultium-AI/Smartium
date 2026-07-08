import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kernvragen bij subfertiliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling van een subfertiel paar zijn er drie basisvragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Zijn er eicellen en zo ja, ovuleren die?`}</Inline></li>
        <li><Inline>{`Zijn er zaadcellen en zo ja, worden die geëjaculeerd?`}</Inline></li>
        <li><Inline>{`Kunnen de zaadcellen de eicellen bereiken?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de semenanalyse normaal is, is verder onderzoek van de man meestal niet nodig. De belangrijkste prognostische factoren zijn de leeftijd van de vrouw en de duur van de fertiliteitsstoornis.`}</Inline></p>
    </div>
  )
}
