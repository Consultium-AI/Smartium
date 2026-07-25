import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Typische gewrichten bij artrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Artrose past vaak bij afwijkingen in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**DIP-gewrichten**`}</Inline></li>
        <li><Inline>{`**PIP-gewrichten**`}</Inline></li>
        <li><Inline>{`**CMC-1**`}</Inline></li>
        <li><Inline>{`**STT**`}</Inline></li>
        <li><Inline>{`**MTP-1**`}</Inline></li>
        <li><Inline>{`knieën en heupen`}</Inline></li>
      </ul>
    </div>
  )
}
