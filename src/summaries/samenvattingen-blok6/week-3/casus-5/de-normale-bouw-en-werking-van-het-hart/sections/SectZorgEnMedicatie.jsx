import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zorg en medicatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij zwangerschap en hartziekte zijn preconceptie-counseling, multidisciplinaire zorg en goede monitoring belangrijk. Medicatie moet zorgvuldig worden gekozen, omdat sommige middelen onveilig zijn tijdens zwangerschap.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
