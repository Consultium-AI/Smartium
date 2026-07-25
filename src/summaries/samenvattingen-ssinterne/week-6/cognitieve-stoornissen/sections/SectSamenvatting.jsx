import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cognitieve stoornissen bij ouderen vragen om een brede, gestructureerde aanpak. Begin altijd met anamnese, heteroanamnese, observatie en lichamelijk onderzoek. Denk breed aan delier, metabole oorzaken, intoxicatie, Wernicke encefalopathie en dementie. In deze casus bleken hyponatriëmie, alcoholgebruik en ondervoeding belangrijke factoren. Na behandeling van de acute ontregeling bleef er cognitieve stoornis bestaan, waarna MMSE, NPO en MRI hielpen bij verdere diagnostiek. De uiteindelijke werkdiagnose was alcohol-gerelateerde dementie, met nadruk op goede begeleiding en zorgorganisatie.`}</Inline></p>
    </div>
  )
}
