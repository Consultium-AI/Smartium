import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Minder bekende oorzaken van hematurie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige oorzaken van hematurie zijn zeldzamer, maar wel goed om te kennen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Loin pain hematuria syndrome**: episodische flankpijn met hematurie, meestal microscopisch.`}</Inline></li>
        <li><Inline>{`**Exercise-induced hematuria**: hematurie na zware inspanning, zoals een marathon.`}</Inline></li>
      </ul>
    </div>
  )
}
