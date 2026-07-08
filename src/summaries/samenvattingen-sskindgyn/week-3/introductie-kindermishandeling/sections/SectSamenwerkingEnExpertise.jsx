import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenwerking en expertise`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij vermoedens van kindermishandeling is samenwerking belangrijk. Er is aandacht voor forensisch-medische expertise, onder andere via het LECK. Het doel daarvan is om goede medische en forensische diagnostiek mogelijk te maken, juist omdat er in de praktijk zowel te veel bijna-fatale kindermishandeling als te weinig goede diagnostiek is.`}</Inline></p>
    </div>
  )
}
