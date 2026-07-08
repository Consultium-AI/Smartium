import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De baring is een fysiologisch proces met vier tijdperken: ontsluiting, uitdrijving, nageboorte en het postplacentaire tijdperk. Bij een normale baring is de zwangerschap voldragen, ligt de foetus in hoofdligging, beginnen de weeën spontaan en verlopen geboorte en nageboorte zonder grote interventies.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het ontsluitingstijdperk zorgen weeën voor verstrijken en ontsluiting van de cervix. De voortgang beoordeel je met anamnese, lichamelijk onderzoek en vaginaal toucher volgens POVIAS. De voortgang volg je bij voorkeur met een partogram. Als de baring traag verloopt, denk je aan onvoldoende weeën, een afwijkende stand van het hoofd, afwijkingen van het bekken of afwijkingen van de uterus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het uitdrijvingstijdperk zorgt de inwendige spildraai ervoor dat het hoofd door het bekken kan passeren. Na de geboorte van het hoofd volgt de uitwendige spildraai van de schouders. Daarna begeleid je de geboorte van de schouders en verzorg je de pasgeborene.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het nageboortetijdperk wordt de placenta geboren. Met de handgreep van Küstner beoordeel je of de placenta los ligt. Oxytocine helpt bij een vlotte geboorte van de placenta en vermindert bloedverlies. Tijdens de hele baring moet je ook letten op de foetale conditie, bijvoorbeeld met CTG of doptone.`}</Inline></p>
    </div>
  )
}
