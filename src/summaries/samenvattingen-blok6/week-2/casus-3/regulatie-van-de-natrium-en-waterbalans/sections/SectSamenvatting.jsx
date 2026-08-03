import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De natrium- en waterbalans zijn nauw met elkaar verbonden, maar worden via verschillende mechanismen geregeld. Natrium bepaalt vooral het extracellulaire volume, terwijl water vooral de osmolaliteit bepaalt. De nieren spelen hierin de hoofdrol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Natrium wordt in verschillende segmenten van het nefron teruggeresorbeerd via specifieke transporters: NHE3, NKCC2, NCC en ENaC. Hormonen zoals angiotensine II, aldosteron, het sympathisch zenuwstelsel en atriaal natriuretisch peptide sturen deze processen aan. Waterbalans wordt vooral geregeld via osmoreceptoren in de hypothalamus, ADH en dorst. ADH werkt vooral in de verzamelbuis en maakt waterreabsorptie mogelijk via aquaporines.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nier gebruikt diffusie, osmose, filtratie en convectie. De glomerulaire filtratiebarrière zorgt ervoor dat water en zouten worden gefiltreerd, maar eiwitten normaal gesproken niet. Grootte-selectiviteit en ladingsselectiviteit zijn daarbij belangrijk. In de praktijk zijn deze processen essentieel om te begrijpen hoe hyponatriëmie en hypernatriëmie ontstaan en hoe je ze kunt benaderen.`}</Inline></p>
    </div>
  )
}
