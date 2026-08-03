import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemodynamische effecten van een PDA`}</Inline></SubHeading>
      <PBody text={`Bij een PDA stroomt bloed van de **aorta naar de arteria pulmonalis**, omdat de systemische druk hoger is dan de pulmonale druk. Daardoor krijgen de pulmonale arteriën, pulmonale venen, het linker atrium en de linker ventrikel extra bloed te verwerken. Bij een significante shunt zal dus vooral de **linker ventrikel** dilateren. Een grote shunt kan leiden tot hartfalen en pulmonale hypertensie.`} />
    </div>
  )
}
