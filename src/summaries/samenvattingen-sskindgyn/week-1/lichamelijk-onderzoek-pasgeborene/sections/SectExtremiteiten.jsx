import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Extremiteiten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aan de extremiteiten let je op aangeboren vormafwijkingen. Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**amelie**: afwezigheid van een ledemaat;`}</Inline></li>
        <li><Inline>{`**focomelie**: sterk verkorte ledematen;`}</Inline></li>
        <li><Inline>{`afwijkingen van vingers en tenen, zoals **syndactylie**, **clinodactylie** en **polydactylie**.`}</Inline></li>
      </ul>
      <PBody text={`Ook afwijkende handlijnen zijn belangrijk. Een voorbeeld is de **simian crease**, die kan voorkomen bij **trisomie 21**.`} />
      <PBody text={`Bij de voeten let je op vormafwijkingen zoals **pes equinovarus**, ook wel klompvoet genoemd.`} />
      <PBody text={`Verder zoek je naar tekenen van **Erbse parese**, wat kan passen bij geboortetrauma.`} />
      <SubHeading><Inline>{`Heupen`}</Inline></SubHeading>
      <PBody text={`De heupen beoordeel je met de **handgreep van Ortolani**. Dit is een aanwijzing voor **congenitale heupdysplasie**.`} />
    </div>
  )
}
