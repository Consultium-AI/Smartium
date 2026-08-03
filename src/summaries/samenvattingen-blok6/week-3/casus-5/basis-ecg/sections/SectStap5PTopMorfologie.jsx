import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 5: P-top morfologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De P-top geeft informatie over de atria. Normaal is de P-top positief in I, II, III, aVL en aVF, en bifasisch in V1. De P-top bestaat eigenlijk uit twee componenten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`P1: rechteratrium`}</Inline></li>
        <li><Inline>{`P2: linkeratrium`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Rechteratriumdilatatie: P pulmonale`}</Inline></SubHeading>
      <PBody text={`Als het rechteratrium vergroot is, wordt de eerste component belangrijker. Dan wordt de P-top in afleiding II hoger dan 2,5 mm. In V1 wordt het positieve deel van de P-top dominanter. Dit heet ook wel **P pulmonale** en past vaak bij longaandoeningen.`} />
      <SubHeading><Inline>{`Linkeratriumdilatatie: P mitrale`}</Inline></SubHeading>
      <PBody text={`Bij vergroting van het linkeratrium wordt de tweede component prominenter. De P-top wordt dan verbreed en kan een M-vorm krijgen in afleiding II. De duur is dan meer dan 120 ms. In V1 wordt het negatieve deel van de P-top belangrijker. Dit heet **P mitrale** en past vaak bij mitralisklepproblematiek.`} />
      <SubHeading><Inline>{`Ectopisch atriaal ritme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet altijd is de sinusknoop de dominante pacemaker. Soms bepaalt een ectopische atriale focus het ritme. Dan is de P-top niet meer positief in I, II en III, omdat de atriale activatievector anders loopt.`}</Inline></p>
    </div>
  )
}
