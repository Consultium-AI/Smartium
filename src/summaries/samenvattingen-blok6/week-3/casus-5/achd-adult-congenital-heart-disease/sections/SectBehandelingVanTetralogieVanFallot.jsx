import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van tetralogie van Fallot`}</Inline></SubHeading>
      <PBody text={`Deze afwijking kan alleen **chirurgisch** worden gecorrigeerd. Het VSD wordt zodanig gesloten dat de aorta alleen bloed uit de linker ventrikel ontvangt. De pulmonalisstenose wordt opgeheven, vaak door de doorgang te verbreden met een patch.`} />
    </div>
  )
}
