import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toekomstige ontwikkelingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn ontwikkelingen gaande in de behandeling van het oesophaguscarcinoom. Een belangrijk toekomstbeeld is dat sommige patiënten na neoadjuvante chemoradiotherapie geen vitaal tumorweefsel meer blijken te hebben. Als dat vooraf beter te herkennen zou zijn, zou bij een deel van de patiënten een grote operatie misschien achterwege kunnen blijven. Dat zou veel morbiditeit kunnen voorkomen en de kwaliteit van leven verbeteren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook in de toekomst blijft de vraag belangrijk welke patiënten echt baat hebben bij een operatie en welke patiënten mogelijk voldoende hebben aan andere behandeling.`}</Inline></p>
    </div>
  )
}
