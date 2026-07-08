import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zwangerschapsafbreking`}</Inline></SubHeading>
      <PBody text={`Bij een ernstige afwijking kan de zwangere binnen de grenzen van de **Wet Afbreking Zwangerschappen (WAZ)** tot 24 weken een zwangerschap laten afbreken, ook op psychosociale gronden.`} />
    </div>
  )
}
