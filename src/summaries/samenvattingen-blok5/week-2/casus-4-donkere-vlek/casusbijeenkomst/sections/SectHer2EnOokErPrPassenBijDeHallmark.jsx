import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`HER2 en ook ER/PR passen bij de hallmark:`}</Inline></SubHeading>
      <PBody text={`**sustaining proliferative signaling**`} />
      <p className="leading-relaxed"><Inline>{`Dat betekent dat de tumor groeisignalen blijft ontvangen of versterken.`}</Inline></p>
    </div>
  )
}
