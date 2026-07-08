import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doorlopen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`relevante vragen stellen bij een zorgvraag over menstruatiestoornissen;`}</Inline></li>
        <li><Inline>{`op basis van de anamnese een differentiaaldiagnose opstellen van oorzaken van menstruatiestoornissen;`}</Inline></li>
        <li><Inline>{`voorstellen doen voor aanvullend onderzoek om tot een diagnose te komen;`}</Inline></li>
        <li><Inline>{`een voorstel doen voor behandeling van de afwijking.`}</Inline></li>
      </ul>
    </div>
  )
}
