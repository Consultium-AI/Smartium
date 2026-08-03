import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aortastenose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De aortaklep is vernauwd. Daardoor stijgt de afterload van de linkerventrikel sterk. De ventrikel moet veel hogere druk opbouwen, het ESV stijgt en het slagvolume daalt.`}</Inline></p>
    </div>
  )
}
