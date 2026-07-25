import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Erfelijke trombofilie`}</Inline></SubHeading>
      <PBody text={`Bij een **hypercoagulabele toestand** spelen erfelijke afwijkingen in de stolling een rol. Deze erfelijke vormen van trombofilie geven een verhoogde kans op een eerste veneuze trombose. De vijf belangrijkste zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`antitrombine-deficiëntie;`}</Inline></li>
        <li><Inline>{`proteïne C-deficiëntie;`}</Inline></li>
        <li><Inline>{`proteïne S-deficiëntie;`}</Inline></li>
        <li><Inline>{`factor V Leiden-mutatie;`}</Inline></li>
        <li><Inline>{`prothrombinegenvariant.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Hoe zorgen deze afwijkingen voor meer trombose?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Antitrombine** remt trombine en in mindere mate ook factor Xa en factor IXa. Bij een tekort is er minder rem op fibrinevorming.`}</Inline></li>
        <li><Inline>{`**Geactiveerd proteïne C** remt factor Va en factor VIIIa. Bij een tekort is er dus minder rem op fibrinevorming.`}</Inline></li>
        <li><Inline>{`**Proteïne S** is een cofactor voor proteïne C. Bij minder proteïne S werkt proteïne C minder goed.`}</Inline></li>
        <li><Inline>{`**Factor V Leiden** is een puntmutatie in factor V waardoor geactiveerd proteïne C factor Va niet meer goed kan inactiveren.`}</Inline></li>
        <li><Inline>{`**Prothrombinegenvariant** zorgt voor meer protrombine, waardoor meer trombine en dus meer fibrine wordt gevormd.`}</Inline></li>
      </ul>
    </div>
  )
}
