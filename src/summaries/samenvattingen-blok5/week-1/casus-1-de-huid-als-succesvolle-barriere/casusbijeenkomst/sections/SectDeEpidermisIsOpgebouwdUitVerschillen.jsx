import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De epidermis is opgebouwd uit verschillende strata:`}</Inline></SubHeading>
      <DataTable rows={[["Laag", "Kenmerk"], ["---", "---"], ["Stratum basale", "Diepste laag; hier ontstaan nieuwe cellen"], ["Stratum spinosum", "Bevat veel keratinocyten en celverbindingen"], ["Stratum granulosum", "Belangrijk voor verhoorning en barrièrevorming"], ["Stratum lucidum", "Alleen aanwezig in handpalmen en voetzolen"], ["Stratum corneum", "Buitenste laag; dode hoorncellen vormen de beschermende laag"]]} />
      <p className="leading-relaxed"><Inline>{`Het stratum corneum is de “dead keratin layer” en vormt samen met andere onderdelen van de barrière een belangrijke bescherming tegen vochtverlies en binnendringen van stoffen.`}</Inline></p>
      <SubHeading level={2}><Inline>{`De huidbarrière: hoe werkt die?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De huidbarrière bestaat niet alleen uit cellen, maar ook uit lipiden, verbindingen tussen cellen en signalen van immuuncellen. In deze casus ligt de nadruk op wat er gebeurt als die barrière beschadigd raakt.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er bij barrièrebeschadiging?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij chronische huidziekten is barrièrebeschadiging niet alleen een gevolg van ontsteking, maar ook een oorzaak ervan. Er ontstaat dus een vicieuze cirkel.`}</Inline></p>
    </div>
  )
}
