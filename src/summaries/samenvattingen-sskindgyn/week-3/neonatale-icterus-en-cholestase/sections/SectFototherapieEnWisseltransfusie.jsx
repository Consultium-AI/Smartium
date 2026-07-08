import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fototherapie en wisseltransfusie`}</Inline></SubHeading>
      <PBody text={`Bij neonatale hyperbilirubinemie is **fototherapie** een belangrijke behandeling. Het principe is simpel: bilirubine wordt onder invloed van licht omgezet in **wateroplosbare isomeren**. Die kunnen zonder conjugatie worden uitgescheiden.`} />
      <PBody text={`De werkzaamheid hangt vooral af van licht met een golflengte van **450 nm**, dus **blauw licht**. Het gaat dus niet om ultraviolet licht.`} />
      <p className="leading-relaxed"><Inline>{`Tijdens fototherapie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ligt het kind bloot in de couveuse of in een bedje;`}</Inline></li>
        <li><Inline>{`moeten de ogen goed worden afgeschermd;`}</Inline></li>
        <li><Inline>{`moet de lichaamstemperatuur regelmatig worden gecontroleerd;`}</Inline></li>
        <li><Inline>{`wordt extra vocht toegediend.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Fototherapie werkt niet direct snel genoeg; de bilirubine daalt langzaam. Daarom moet je er op tijd mee beginnen.`}</Inline></p>
      <PBody text={`Als fototherapie onvoldoende is, kan een **wisseltransfusie** nodig zijn om **kernicterus** te voorkomen.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wat is het doel van fototherapie?**
Bilirubine omzetten in een vorm die wateroplosbaar is en dus zonder leverconjugatie kan worden uitgescheiden.`} />
    </div>
  )
}
