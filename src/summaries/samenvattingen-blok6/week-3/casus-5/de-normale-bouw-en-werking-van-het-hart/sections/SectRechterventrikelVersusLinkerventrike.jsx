import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rechterventrikel versus linkerventrikel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De PV-loop van de rechterventrikel verschilt van die van de linkerventrikel.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de rechterventrikel werkt bij veel lagere drukken`}</Inline></li>
        <li><Inline>{`de lus is vaak meer driehoekig`}</Inline></li>
        <li><Inline>{`de rechterventrikel is gevoeliger voor toename van afterload`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De linkerventrikel werkt tegen de hoge druk van de systemische circulatie, terwijl de rechterventrikel pompt in de lage-druk pulmonale circulatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
