import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze samenvatting kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klinisch-chemische begrippen zoals **juistheid**, **precisie** en **interferenties** uitleggen;`}</Inline></li>
        <li><Inline>{`testuitslagen beter interpreteren met behulp van **sensitiviteit** en **specificiteit**;`}</Inline></li>
        <li><Inline>{`de belangrijkste **lever-, nier- en pancreasmarkers** benoemen en in grote lijnen begrijpen waarvoor ze worden gebruikt;`}</Inline></li>
        <li><Inline>{`het verschil uitleggen tussen **serum** en **plasma** en weten welke bloedafnamebuis bij welke bepaling past.`}</Inline></li>
      </ul>
    </div>
  )
}
