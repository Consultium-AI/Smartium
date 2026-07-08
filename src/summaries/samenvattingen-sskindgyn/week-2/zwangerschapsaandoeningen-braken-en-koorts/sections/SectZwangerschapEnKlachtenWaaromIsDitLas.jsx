import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zwangerschap en klachten: waarom is dit lastig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap past het lichaam zich op veel manieren aan om de ontwikkeling van embryo en foetus mogelijk te maken en om zich voor te bereiden op de baring. Juist daardoor kan er iets misgaan in die aanpassingen, met een zwangerschap gerelateerde aandoening als gevolg. Tegelijk kan een zwangere natuurlijk ook een ziekte krijgen die losstaat van de zwangerschap. Dat maakt de beoordeling soms lastig: klachten kunnen passen bij een zwangerschapsaandoening, maar ook bij een andere aandoening. Bovendien verloopt een ziekte in de zwangerschap vaak anders dan buiten de zwangerschap.`}</Inline></p>
      <PBody text={`De kern is daarom steeds: **is dit een zwangerschapsaandoening of niet?** Dat bepaalt de diagnostiek, de behandeling en de uitleg aan de patiënte.`} />
    </div>
  )
}
