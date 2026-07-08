import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De normale baring verloopt spontaan tussen 37 en 42 weken, meestal in hoofdligging, en kent vier tijdperken: ontsluiting, uitdrijving, nageboorte en postplacentaire fase. In het ontsluitingstijdperk verstrijkt de portio en ontstaat ontsluiting door goede weeën. Je beoordeelt de baring met anamnese, lichamelijk onderzoek en vaginaal toucher volgens POVIAS. Bij trage vordering gebruik je een partogram en denk je aan oorzaken zoals zwakke weeën, afwijkende stand, bekkenafwijkingen of uterusafwijkingen. Behandeling kan bestaan uit oxytocine of een sectio caesarea. In het uitdrijvingstijdperk draait het hoofd via de inwendige spildraai en na de geboorte volgen de uitwendige spildraai, de geboorte van de schouders en daarna de placenta. De placenta-loslating beoordeel je met de handgreep van Küstner.`}</Inline></p>
    </div>
  )
}
