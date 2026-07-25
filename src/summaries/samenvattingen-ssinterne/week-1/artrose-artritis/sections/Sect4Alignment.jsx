import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`4. Alignment`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`standsafwijking`}</Inline></li>
        <li><Inline>{`subluxatie`}</Inline></li>
      </ul>
      <PBody text={`Een **subluxatie** is een gedeeltelijke ontwrichting.`} />
    </div>
  )
}
