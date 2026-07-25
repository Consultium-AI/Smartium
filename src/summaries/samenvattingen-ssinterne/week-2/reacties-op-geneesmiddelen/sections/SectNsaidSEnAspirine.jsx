import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`NSAID’s en aspirine`}</Inline></SubHeading>
      <PBody text={`**NSAID’s** zijn niet-steroïde anti-inflammatoire geneesmiddelen. Ze worden veel gebruikt vanwege hun **pijnstillende**, **koortsverlagende** en **ontstekingsremmende** werking. **Aspirine** hoort ook bij deze groep.`} />
      <p className="leading-relaxed"><Inline>{`Deze middelen zijn klinisch belangrijk omdat ze vaak worden voorgeschreven of zelf worden gebruikt. Daardoor komen reacties erop ook regelmatig voor.`}</Inline></p>
    </div>
  )
}
