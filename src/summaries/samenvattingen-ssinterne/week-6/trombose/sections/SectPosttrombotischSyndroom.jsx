import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Posttrombotisch syndroom`}</Inline></SubHeading>
      <PBody text={`Na een trombosebeen houden veel patiënten klachten over die passen bij het posttrombotisch syndroom, afgekort PTS. Deze klachten ontstaan door **veneuze hypertensie**. Dat betekent een verhoogde druk in de venen, meestal door persisterende veneuze obstructie en klepschade.`} />
    </div>
  )
}
