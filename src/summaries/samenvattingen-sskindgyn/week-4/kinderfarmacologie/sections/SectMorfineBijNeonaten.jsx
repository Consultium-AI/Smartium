import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Morfine bij neonaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Opioïden geven bij jonge kinderen sneller ademhalingsdepressie. Daarom wordt morfine per kilogram lager gedoseerd bij neonaten dan bij oudere kinderen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neonaten: 0,3-0,6 mg/kg/dag in 6 doses;`}</Inline></li>
        <li><Inline>{`ouder dan 1 maand: 0,6-1,2 mg/kg/dag in 6 doses.`}</Inline></li>
      </ul>
    </div>
  )
}
