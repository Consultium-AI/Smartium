import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Colposcopische indruk: wat is pluis en wat niet?`}</Inline></SubHeading>
      <PBody text={`Bij colposcopie beoordeel je of een afwijking verdacht is. Voorbeelden van niet-pluisbeelden zijn een **cervixcarcinoom** en **condylomata**. Een **ovula Nabothi** en een **normaal ectropion** zijn voorbeelden van pluis, dus niet-verdachte bevindingen.`} />
    </div>
  )
}
