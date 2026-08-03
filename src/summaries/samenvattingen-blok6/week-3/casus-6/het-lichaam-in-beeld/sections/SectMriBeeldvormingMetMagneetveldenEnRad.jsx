import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`MRI: beeldvorming met magneetvelden en radiogolven`}</Inline></SubHeading>
      <PBody text={`MRI staat voor **Magnetic Resonance Imaging**. Deze techniek gebruikt **sterke magneetvelden** en **radiogolven** en maakt **geen gebruik van röntgenstralen**.`} />
    </div>
  )
}
