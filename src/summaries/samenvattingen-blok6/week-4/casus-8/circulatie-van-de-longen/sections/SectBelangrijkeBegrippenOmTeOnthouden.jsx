import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke begrippen om te onthouden`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Arterie**: voert bloed **van het hart af**.`}</Inline></li>
        <li><Inline>{`**Vene**: voert bloed **naar het hart toe**.`}</Inline></li>
        <li><Inline>{`**Pulmonale arterie**: is een uitzondering op het idee dat arteriën altijd zuurstofrijk bloed vervoeren; hier gaat juist zuurstofarm bloed naar de longen.`}</Inline></li>
        <li><Inline>{`**Pulmonale vene**: vervoert zuurstofrijk bloed terug naar het hart.`}</Inline></li>
        <li><Inline>{`**Alveoli**: plaats van gasuitwisseling.`}</Inline></li>
        <li><Inline>{`**Bronchiale circulatie**: verzorgt het longweefsel zelf.`}</Inline></li>
        <li><Inline>{`**Pulmonale circulatie**: verzorgt de gasuitwisseling.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** Waarom is de pulmonale arterie een uitzondering?
**Mini-antwoord:** Omdat een arterie wordt gedefinieerd door de richting van de bloedstroom: van het hart af. Niet door het zuurstofgehalte.`} />
    </div>
  )
}
