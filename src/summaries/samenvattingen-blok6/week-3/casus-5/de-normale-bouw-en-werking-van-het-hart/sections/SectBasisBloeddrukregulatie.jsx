import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Basis bloeddrukregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bloeddruk moet binnen nauwe grenzen blijven, zodat organen continu voldoende bloed krijgen. Daarvoor gebruikt het lichaam snelle en langzamere regelmechanismen.`}</Inline></p>
    </div>
  )
}
