import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de glomerulaire filtratiebarrière beschrijven;`}</Inline></li>
        <li><Inline>{`de glomerulaire, tubulaire en systemische oorzaken van proteïnurie begrijpen;`}</Inline></li>
        <li><Inline>{`op basis van anamnese en laboratoriumonderzoek een differentiaaldiagnose en behandelplan opstellen bij een patiënt met proteïnurie;`}</Inline></li>
        <li><Inline>{`de rol van proteïnurie bij de regulatie van natriumuitscheiding begrijpen.`}</Inline></li>
      </ul>
    </div>
  )
}
