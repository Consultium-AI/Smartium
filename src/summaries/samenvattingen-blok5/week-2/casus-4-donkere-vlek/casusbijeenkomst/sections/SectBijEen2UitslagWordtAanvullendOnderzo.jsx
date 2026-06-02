import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een 2+ uitslag wordt aanvullend onderzoek met ISH gedaan:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`als ISH negatief is, past het bij HER2-low;`}</Inline></li>
        <li><Inline>{`als ISH positief is, is het HER2-positief.`}</Inline></li>
      </ul>
    </div>
  )
}
