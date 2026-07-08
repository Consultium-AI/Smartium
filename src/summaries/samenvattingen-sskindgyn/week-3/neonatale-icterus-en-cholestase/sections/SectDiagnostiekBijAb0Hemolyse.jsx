import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij AB0-hemolyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op AB0-antagonisme let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedgroep moeder en kind;`}</Inline></li>
        <li><Inline>{`indirecte hyperbilirubinemie;`}</Inline></li>
        <li><Inline>{`reticulocytose;`}</Inline></li>
        <li><Inline>{`polychromasie, kernhoudende erytrocyten en sferocyten;`}</Inline></li>
        <li><Inline>{`IgG anti-A of anti-B in maternaal serum;`}</Inline></li>
        <li><Inline>{`directe Coombsreactie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De directe Coombsreactie laat zien of er antistoffen aan erytrocyten gebonden zijn. Bij AB0-incompatibiliteit kan deze test zwak positief zijn; dat gebeurt niet altijd sterk, maar het past wel bij de diagnose.`}</Inline></p>
    </div>
  )
}
