import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        <Inline>{`Na deze casusbijeenkomst moet je kunnen uitleggen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2.5">
        <li>
          <Inline>{`hoe de huid anatomisch is opgebouwd en welke belangrijke structuren je in de huid terugvindt;`}</Inline>
        </li>
        <li>
          <Inline>{`hoe de epidermis is ingedeeld in lagen en welke celtypen daarin voorkomen;`}</Inline>
        </li>
        <li>
          <Inline>{`hoe de huidbarrière werkt en waarom die zo belangrijk is;`}</Inline>
        </li>
        <li>
          <Inline>{`wat er gebeurt bij irritatief contacteczeem en hoe dat verschilt van allergisch contacteczeem;`}</Inline>
        </li>
        <li>
          <Inline>{`waarom barrièrebeschadiging en inflammatie elkaar kunnen versterken in een vicieuze cirkel;`}</Inline>
        </li>
        <li>
          <Inline>{`welke omgevingsfactoren de huid kunnen beschadigen;`}</Inline>
        </li>
        <li>
          <Inline>{`welke preventieve maatregelen helpen om huidbeschadiging te beperken;`}</Inline>
        </li>
        <li>
          <Inline>{`hoe je bij een schilder met huidklachten klinisch redeneert van klachten naar diagnose.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
