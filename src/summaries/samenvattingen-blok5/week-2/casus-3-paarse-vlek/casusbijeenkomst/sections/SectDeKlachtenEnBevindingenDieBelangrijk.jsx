import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Casus 1: kind met purpura`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De klachten en bevindingen die belangrijk zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`plots ontstane rode/paarse vlekjes sinds 1-2 dagen;`}</Inline></li>
        <li><Inline>{`geen duidelijke koorts, al wordt bij lichamelijk onderzoek wel 38,1 °C genoteerd;`}</Inline></li>
        <li><Inline>{`recente luchtweginfectie ongeveer een week eerder;`}</Inline></li>
        <li><Inline>{`geen medicatie en geen vaccinaties als uitlokkende factor;`}</Inline></li>
        <li><Inline>{`gewrichtspijn;`}</Inline></li>
        <li><Inline>{`lichte buikpijn;`}</Inline></li>
        <li><Inline>{`vooral afwijkingen op de onderbenen;`}</Inline></li>
        <li><Inline>{`geen neurologische klachten;`}</Inline></li>
        <li><Inline>{`geen oedemen;`}</Inline></li>
        <li><Inline>{`urine met erytrocyten;`}</Inline></li>
        <li><Inline>{`creatinine normaal;`}</Inline></li>
        <li><Inline>{`ontstekingswaarden verhoogd.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** waarom is het belangrijk om te vragen of de vlekjes wegdrukbaar zijn?
**Mini-antwoord:** omdat niet-wegdrukbare paarse vlekjes passen bij purpura door bloeduitstorting of vaatontsteking, en niet bij gewone roodheid.`} />
    </div>
  )
}
