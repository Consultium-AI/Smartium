import { Inline, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Bij radiotherapie wordt een **bestralingsplan** gemaakt, ook wel **dosisplanning** genoemd.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Daarbij wordt gekeken naar:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`of het doelgebied voldoende dosis krijgt;`}</Inline></li>
        <li><Inline>{`en of kritieke organen zo weinig mogelijk straling krijgen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Belangrijke organen die zo veel mogelijk gespaard moeten worden zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het hart;`}</Inline></li>
        <li><Inline>{`de long;`}</Inline></li>
        <li><Inline>{`de contralaterale mamma.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Het doel is om schade aan gezond weefsel te beperken.`}</Inline>
      </p>
      <PBody
        text={`**Waar let je op bij dosisplanning?**
**Kort antwoord:** op een goede dosis in het doelgebied en een zo laag mogelijke dosis in omliggende kritieke organen.`}
      />
    </div>
  )
}
