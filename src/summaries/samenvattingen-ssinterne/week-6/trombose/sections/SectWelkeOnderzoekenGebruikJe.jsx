import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke onderzoeken gebruik je?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een trombosebeen gebruik je een combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**klinische kansschatting**;`}</Inline></li>
        <li><Inline>{`**D-dimeeronderzoek**;`}</Inline></li>
        <li><Inline>{`**compressie-ultrasonografie (CUS)**;`}</Inline></li>
        <li><Inline>{`soms **venografie**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Venografie wordt tegenwoordig zelden nog gebruikt.`}</Inline></p>
    </div>
  )
}
