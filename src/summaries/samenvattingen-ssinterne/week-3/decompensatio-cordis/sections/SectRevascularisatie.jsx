import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Revascularisatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als coronair lijden de oorzaak is, kan de doorbloeding van de coronairen worden hersteld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`met een stent via een percutane coronaire interventie;`}</Inline></li>
        <li><Inline>{`of met bypasschirurgie, ook wel coronary artery bypass grafting.`}</Inline></li>
      </ul>
    </div>
  )
}
