import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De aldosteronparadox`}</Inline></SubHeading>
      <PBody text={`Het lijkt op het eerste gezicht vreemd dat hetzelfde hormoon, **aldosteron**, zowel kan bijdragen aan **natriumvasthouding** als aan **kaliumuitscheiding**. Toch kan het lichaam dit heel precies sturen. Dat heet de **aldosteronparadox**.`} />
      <PBody text={`De kern van deze paradox is de **natriumflow naar distaal**.`} />
    </div>
  )
}
