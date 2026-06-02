import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`CRP kan verhoogd zijn;`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leukocyten kunnen verhoogd zijn, maar dat hoeft niet;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`bezinking is aspecifiek en kan verhoogd zijn bij chronische processen.`}</Inline></p>
    </div>
  )
}
