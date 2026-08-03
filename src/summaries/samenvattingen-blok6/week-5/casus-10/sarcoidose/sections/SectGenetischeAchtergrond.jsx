import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Genetische achtergrond`}</Inline></SubHeading>
      <PBody text={`Ook de **immunogenetische achtergrond** speelt waarschijnlijk een rol. Dat helpt verklaren waarom sarcoïdose bij de ene patiënt mild verloopt en bij de andere juist uitgebreider of ernstiger.`} />
    </div>
  )
}
