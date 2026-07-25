import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 3: Geleidingstijden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste tijden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PQ-tijd** of **PR-tijd**`}</Inline></li>
        <li><Inline>{`**QRS-duur**`}</Inline></li>
        <li><Inline>{`**QT-tijd**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`PQ-tijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De PQ-tijd loopt van het begin van de P-top tot het begin van het QRS-complex. Deze tijd weerspiegelt de geleiding door de atria, AV-knoop en het His-Purkinje-systeem. Normaal is deze 0,12 tot 0,20 seconde.`}</Inline></p>
      <SubHeading><Inline>{`QRS-duur`}</Inline></SubHeading>
      <PBody text={`De QRS-duur laat zien hoe lang het duurt om de ventrikels te activeren. Normaal is dit maximaal 0,10 seconde. Een duur van meer dan 0,12 seconde wijst op geleidingsvertraging, vaak door een bundeltakblok. Het einde van het QRS-complex heet het **J-punt**.`} />
      <SubHeading><Inline>{`QT-tijd`}</Inline></SubHeading>
      <PBody text={`De QT-tijd loopt van het begin van het QRS-complex tot het einde van de T-top. Deze tijd weerspiegelt de repolarisatie van de ventrikels. Omdat de QT-tijd afhangt van de hartfrequentie, gebruik je de gecorrigeerde QT-tijd, de **QTc**:`} />
      <PBody text={`**QTc = QT / √RR-interval**`} />
      <p className="leading-relaxed"><Inline>{`Een verlengde QT-tijd geeft een verhoogd risico op ventriculaire ritmestoornissen. Een normale QT-tijd is korter dan 450 ms bij mannen en 460 ms bij vrouwen.`}</Inline></p>
    </div>
  )
}
