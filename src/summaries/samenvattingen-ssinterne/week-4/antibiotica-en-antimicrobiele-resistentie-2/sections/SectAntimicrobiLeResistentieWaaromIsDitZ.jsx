import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antimicrobiële resistentie: waarom is dit zo’n groot probleem?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Antimicrobiële resistentie betekent dat bacteriën ongevoelig worden voor antibiotica. Dat heeft grote gevolgen voor de zorg. Resistente bacteriën verspreiden zich wereldwijd, nieuwe antibiotica zijn schaars en bestaande middelen worden steeds minder effectief. Daardoor worden infecties moeilijker te behandelen en neemt de kans op overlijden toe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De gevolgen zijn breed:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meer en ernstigere infecties`}</Inline></li>
        <li><Inline>{`langere ziekenhuisopnames`}</Inline></li>
        <li><Inline>{`duurdere en intensievere zorg`}</Inline></li>
        <li><Inline>{`meer sterfte`}</Inline></li>
        <li><Inline>{`risicovollere medische ingrepen, zoals chirurgie, chemotherapie en transplantatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De verwachting is dat als resistentie doorgaat, het aantal sterfgevallen door antimicrobiële resistentie in de toekomst enorm zal toenemen.`}</Inline></p>
    </div>
  )
}
