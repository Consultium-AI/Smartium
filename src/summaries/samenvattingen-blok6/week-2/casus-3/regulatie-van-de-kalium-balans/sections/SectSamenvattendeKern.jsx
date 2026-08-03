import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattende kern`}</Inline></SubHeading>
      <PBody text={`Kalium is een essentieel ion dat grotendeels intracellulair zit. Omdat de serumvoorraad klein is, moet het lichaam na een kaliumrijke maaltijd snel ingrijpen. Dat gebeurt eerst via **cellulaire opname** door de **Na-K-ATPase**, onder invloed van insuline, adrenaline en aldosteron. Daarna zorgt de **nier** voor definitieve uitscheiding.`} />
      <PBody text={`In de nier speelt **aldosteron** een centrale rol. Het stimuleert natriumreabsorptie via **ENaC**, waardoor het lumen negatief wordt en kalium via kaliumkanalen kan diffunderen. Geneesmiddelen zoals **amiloride**, **lisdiuretica** en **penicilline** beïnvloeden dit proces elk op hun eigen manier. De **aldosteronparadox** laat zien dat aldosteron in verschillende situaties toch een ander netto-effect kan hebben, afhankelijk van de natriumflow naar distaal.`} />
    </div>
  )
}
