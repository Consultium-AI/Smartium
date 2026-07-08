import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rug`}</Inline></SubHeading>
      <PBody text={`De rug moet goed worden nagekeken om te zien of deze **gesloten** is. Je let op aanwijzingen voor **spina bifida**. Dat is belangrijk, omdat afwijkingen van de rug soms direct zichtbaar zijn bij inspectie.`} />
    </div>
  )
}
