import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Immunofixatie: welk type M-proteïne?`}</Inline></SubHeading>
      <PBody text={`Met **immunofixatie** wordt bevestigd of het gevonden M-proteïne monoklonaal is en welk type het betreft. Daarbij wordt gekeken naar antistoffen tegen **IgG, IgA, IgM, kappa en lambda**.`} />
      <PBody text={`In deze casus blijkt sprake van een **IgG-kappa M-proteïne** van **38 g/l**.`} />
      <SubHeading><Inline>{`Waarom is dit belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De typering van het M-proteïne helpt bij de diagnose en verdere classificatie van de aandoening. Het laat zien welke antistof en welke lichte keten betrokken zijn.`}</Inline></p>
    </div>
  )
}
