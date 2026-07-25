import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pneumonie: het klinische beeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pneumonie betekent een infectie van het longweefsel. Koorts, hoesten en dyspnoe zijn daarbij veelvoorkomende klachten. Het lastige is dat deze klachten niet alleen door een infectie kunnen komen, maar ook door andere aandoeningen, zoals longembolie of hartfalen. Daarom is een goede anamnese heel belangrijk. Je let daarbij vooral op het beloop van de klachten, de leeftijd van de patiënt, onderliggend lijden, voedingstoestand en reisgedrag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Luchtweginfecties kunnen heel mild zijn, zoals een gewone verkoudheid, maar ook ernstig verlopen. Soms is opname op de intensive care en beademing nodig. De verwekkers kunnen virussen, bacteriën, mycoplasma’s of schimmels zijn. Vooral bij een zieke patiënt moet je dus breed denken.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is de anamnese zo belangrijk bij een pneumonie?
**Mini-antwoord:** omdat klachten door verschillende oorzaken kunnen komen en de voorgeschiedenis helpt om de juiste differentiaaldiagnose en aanvullend onderzoek te kiezen.`} />
    </div>
  )
}
