import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vastenmetabolisme: hoe houdt het lichaam glucose op peil?`}</Inline></SubHeading>
      <PBody text={`Tijdens vasten probeert het lichaam een daling van glucose te voorkomen. Dat gebeurt onder invloed van **glucagon, adrenaline, cortisol en groeihormoon**. De processen worden in een vaste volgorde geactiveerd.`} />
    </div>
  )
}
