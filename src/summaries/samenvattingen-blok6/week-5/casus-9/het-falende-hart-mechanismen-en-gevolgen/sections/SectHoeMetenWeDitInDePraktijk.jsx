import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe meten we dit in de praktijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de kliniek worden deze waarden meestal geschat met beeldvorming. Echocardiografie is het meest gebruikt, MRI is nauwkeuriger bij complexe situaties en nucleaire beeldvorming kan soms worden gebruikt om de ejectiefractie te volgen. De uitkomsten zijn altijd een benadering, maar wel zeer bruikbaar voor de beoordeling van hartfalen.`}</Inline></p>
    </div>
  )
}
