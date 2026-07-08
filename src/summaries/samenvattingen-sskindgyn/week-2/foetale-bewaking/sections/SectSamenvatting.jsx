import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale bewaking gebeurt met het CTG, dat de foetale hartfrequentie en de uterusactiviteit registreert. De beoordeling verloopt systematisch via basishartfrequentie, variabiliteit, acceleraties, deceleraties en weeënactiviteit. Normale acceleraties en normale variabiliteit passen bij een goede foetale conditie. Deceleraties moeten altijd worden geïnterpreteerd in relatie tot de contracties, omdat vroege, late en variabele deceleraties verschillende oorzaken hebben. De FIGO-classificatie helpt om CTG’s in normaal, suboptimaal, abnormaal of preterminaal in te delen. Op basis daarvan bepaal je het beleid: afwachten, oorzaak opheffen, aanvullende diagnostiek doen of de baring beëindigen.`}</Inline></p>
    </div>
  )
}
