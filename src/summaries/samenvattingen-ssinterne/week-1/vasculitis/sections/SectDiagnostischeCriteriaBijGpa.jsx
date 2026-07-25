import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische criteria bij GPA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor GPA worden diagnostische criteria gebruikt. Belangrijke punten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neus- of mondontsteking;`}</Inline></li>
        <li><Inline>{`afwijkende thoraxfoto met noduli, infiltraten of cavernes;`}</Inline></li>
        <li><Inline>{`afwijkend urinesediment met microhematurie of erytrocytencilinders;`}</Inline></li>
        <li><Inline>{`granulomateuze ontsteking op biopt.`}</Inline></li>
      </ul>
    </div>
  )
}
