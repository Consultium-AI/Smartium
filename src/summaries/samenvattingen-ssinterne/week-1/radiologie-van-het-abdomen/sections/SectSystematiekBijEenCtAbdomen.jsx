import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systematiek bij een CT-abdomen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook bij een CT-abdomen is een vaste volgorde handig. Je bekijkt steeds één orgaan helemaal, daarna ga je door naar het volgende orgaan. Zo voorkom je dat je dingen mist.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een praktische volgorde is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lever`}</Inline></li>
        <li><Inline>{`milt`}</Inline></li>
        <li><Inline>{`pancreas`}</Inline></li>
        <li><Inline>{`nieren en bijnieren`}</Inline></li>
        <li><Inline>{`bloedvaten`}</Inline></li>
        <li><Inline>{`maag en darmen`}</Inline></li>
        <li><Inline>{`vrije lucht`}</Inline></li>
        <li><Inline>{`vochtcollecties of abcessen`}</Inline></li>
        <li><Inline>{`basale longvelden`}</Inline></li>
        <li><Inline>{`skelet`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door steeds op dezelfde manier te kijken, leer je de normale anatomie herkennen en vallen afwijkingen sneller op.`}</Inline></p>
    </div>
  )
}
