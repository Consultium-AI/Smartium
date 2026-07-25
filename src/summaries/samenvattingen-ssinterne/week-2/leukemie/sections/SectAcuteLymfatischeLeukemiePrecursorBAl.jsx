import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute lymfatische leukemie: precursor B-ALL en Philadelphia-chromosoom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ALL is immunofenotypering heel belangrijk. Een voorbeeld is een celpopulatie met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CD19`}</Inline></li>
        <li><Inline>{`CD34`}</Inline></li>
        <li><Inline>{`CD20`}</Inline></li>
        <li><Inline>{`CD22`}</Inline></li>
        <li><Inline>{`IgM`}</Inline></li>
        <li><Inline>{`CD117`}</Inline></li>
        <li><Inline>{`TdT`}</Inline></li>
      </ul>
      <PBody text={`Dit past bij een **precursor B-ALL**. De combinatie van B-celmarkers met TdT laat zien dat het om een onrijpe B-celvoorloper gaat.`} />
      <SubHeading><Inline>{`Cytogenetica bij ALL`}</Inline></SubHeading>
      <PBody text={`Een belangrijke afwijking is **t(9;22)**, het Philadelphia-chromosoom. Dit leidt tot het fusiegen **BCR-ABL**. Deze afwijking komt klassiek voor bij CML, maar kan ook bij een deel van de volwassenen met precursor B-ALL voorkomen.`} />
      <SubHeading><Inline>{`Behandeling van Philadelphia-positieve precursor B-ALL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze vorm van ALL wordt behandeld met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`combinatiechemotherapie`}</Inline></li>
        <li><Inline>{`een tyrosinekinaseremmer, bij voorkeur **imatinib**`}</Inline></li>
        <li><Inline>{`vaak daarna consolidatie met **allogene stamceltransplantatie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Imatinib werkt door de plek van ATP in het BCR-ABL-eiwit in te nemen, waardoor het eiwit wordt gedeactiveerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De prognose is bij deze ziektevorm nog steeds ernstig, maar de kans op genezing wordt in de stof rond de 50% genoemd. Leeftijd speelt ook hier een belangrijke rol.`}</Inline></p>
    </div>
  )
}
