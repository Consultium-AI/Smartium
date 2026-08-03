import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ventriculaire functie: preload, afterload, slagvolume en Frank-Starling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pompfunctie van de ventrikels hangt af van verschillende factoren.`}</Inline></p>
    </div>
  )
}
