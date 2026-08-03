import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systole: ejectie van bloed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens systole trekken de ventrikels samen en pompen ze bloed de grote slagaders in.`}</Inline></p>
      <SubHeading><Inline>{`1. Isovolumetrische contractie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ventrikels beginnen krachtig samen te trekken. De AV-kleppen sluiten, wat de eerste harttoon geeft. Alle kleppen zijn even gesloten en de druk stijgt snel, terwijl het volume gelijk blijft.`}</Inline></p>
      <SubHeading><Inline>{`2. Ejectiefase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zodra de ventrikeldruk hoger wordt dan de aortadruk of pulmonalisdruk, openen de semilunaire kleppen. Bloed wordt uitgestoten en het ventrikelvolume daalt tot het eind-systolisch volume.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
