import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer denk je eraan?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met astma, eosinofilie, longafwijkingen, neuropathie en systemische klachten moet je denken aan EGPA. Een voorbeeld is een vrouw met astma sinds de tienerjaren, kortademigheid, vermoeidheid, koorts, gewichtsverlies, droge hoest, gevoelsverlies in een arm en een bloedbeeld met eosinofilie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke afwijkingen in het onderzoek zijn dan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eosinofielen;`}</Inline></li>
        <li><Inline>{`BSE/CRP;`}</Inline></li>
        <li><Inline>{`creatinine;`}</Inline></li>
        <li><Inline>{`p-ANCA en anti-MPO;`}</Inline></li>
        <li><Inline>{`urineonderzoek;`}</Inline></li>
        <li><Inline>{`X-thorax.`}</Inline></li>
      </ul>
    </div>
  )
}
