import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorspelbare en onvoorspelbare reacties`}</Inline></SubHeading>
      <PBody text={`Een handige eerste indeling is die tussen **voorspelbare** en **onvoorspelbare** reacties.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Voorspelbare reacties** hangen meestal samen met de bekende farmacologische werking van het middel. Ze zijn vaak dosisafhankelijk: hoe meer van het middel, hoe groter de kans op het effect.`}</Inline></li>
        <li><Inline>{`**Onvoorspelbare reacties** zijn niet direct te verklaren uit de gewone werking van het geneesmiddel. Ze treden slechts bij een deel van de patiënten op en zijn vaak niet goed te voorspellen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij geneesmiddelenovergevoeligheid gaat het meestal om die onvoorspelbare reacties. Die kunnen lijken op een allergie, maar dat is niet altijd zo.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Is elke heftige reactie op een geneesmiddel meteen een allergie?**
Nee. Een heftige reactie kan ook een **pseudo-allergische** reactie zijn of een andere onvoorspelbare geneesmiddelreactie.`} />
    </div>
  )
}
