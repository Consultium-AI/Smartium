import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Seronegatieve artritis in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij seronegatieve artritis let je vooral op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`enthesopathie`}</Inline></li>
        <li><Inline>{`betrokkenheid van de wervelkolom`}</Inline></li>
        <li><Inline>{`afwijkingen op plaatsen waar pezen en ligamenten aanhechten`}</Inline></li>
      </ul>
    </div>
  )
}
