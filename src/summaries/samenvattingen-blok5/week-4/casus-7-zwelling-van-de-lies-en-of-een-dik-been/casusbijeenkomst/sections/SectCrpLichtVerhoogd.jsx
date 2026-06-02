import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`CRP licht verhoogd;`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leukocyten niet altijd verhoogd;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`bezinking verhoogd, maar aspecifiek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een echo van de oksel kan een vergrote lymfeklier laten zien met een vet hilum, wat past bij een reactief aspect. Een punctie van de lymfeklier is hier niet geïndiceerd. Bij verdenking op DVT kan echo of D-dimeer worden overwogen.`}</Inline></p>
    </div>
  )
}
