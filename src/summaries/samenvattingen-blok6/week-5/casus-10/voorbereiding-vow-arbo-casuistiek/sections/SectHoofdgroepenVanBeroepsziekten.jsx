import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoofdgroepen van beroepsziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twaalf hoofdgroepen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`aandoeningen van houding- en bewegingsapparaat;`}</Inline></li>
        <li><Inline>{`gehooraandoeningen;`}</Inline></li>
        <li><Inline>{`hart- en vaataandoeningen;`}</Inline></li>
        <li><Inline>{`huidaandoeningen;`}</Inline></li>
        <li><Inline>{`infectieziekten;`}</Inline></li>
        <li><Inline>{`kanker;`}</Inline></li>
        <li><Inline>{`long- en luchtwegaandoeningen;`}</Inline></li>
        <li><Inline>{`neurologische aandoeningen;`}</Inline></li>
        <li><Inline>{`oogaandoeningen;`}</Inline></li>
        <li><Inline>{`overige beroepsziekten;`}</Inline></li>
        <li><Inline>{`psychische aandoeningen;`}</Inline></li>
        <li><Inline>{`reproductiestoornissen.`}</Inline></li>
      </ul>
    </div>
  )
}
