import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`DOAC of VKA?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De effectiviteit van DOAC’s en vitamine K-antagonisten is gelijk. DOAC’s geven wel minder ernstige bloedingen. Daarom hebben ze vaak de voorkeur.`}</Inline></p>
      <SubHeading><Inline>{`Overwegingen bij de keuze`}</Inline></SubHeading>
      <PBody text={`**VKA**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`veel interacties met andere geneesmiddelen;`}</Inline></li>
        <li><Inline>{`variabel effect op de stolling;`}</Inline></li>
        <li><Inline>{`antistolling is meetbaar met INR;`}</Inline></li>
        <li><Inline>{`antidotum beschikbaar;`}</Inline></li>
        <li><Inline>{`bij start altijd in combinatie met LMWH.`}</Inline></li>
      </ul>
      <PBody text={`**DOAC**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`laagste risico op ernstige bloedingen;`}</Inline></li>
        <li><Inline>{`voorspelbaar effect op de stolling;`}</Inline></li>
        <li><Inline>{`halfwaardetijd ongeveer 10 tot 13 uur;`}</Inline></li>
        <li><Inline>{`soms eerst LMWH nodig;`}</Inline></li>
        <li><Inline>{`voor één middel uit deze groep is een antidotum beschikbaar.`}</Inline></li>
      </ul>
    </div>
  )
}
