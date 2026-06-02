import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Na deze casusbijeenkomst moet je kunnen uitleggen:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe de huid anatomisch is opgebouwd en welke belangrijke structuren je in de huid terugvindt;`}</Inline></li>
        <li><Inline>{`hoe de epidermis is ingedeeld in lagen en welke celtypen daarin voorkomen;`}</Inline></li>
        <li><Inline>{`hoe de huidbarrière werkt en waarom die zo belangrijk is;`}</Inline></li>
        <li><Inline>{`wat er gebeurt bij irritatief contacteczeem en hoe dat verschilt van allergisch contacteczeem;`}</Inline></li>
        <li><Inline>{`waarom barrièrebeschadiging en inflammatie elkaar kunnen versterken in een vicieuze cirkel;`}</Inline></li>
        <li><Inline>{`welke omgevingsfactoren de huid kunnen beschadigen;`}</Inline></li>
        <li><Inline>{`welke preventieve maatregelen helpen om huidbeschadiging te beperken;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`hoe je bij een schilder met huidklachten klinisch redeneert van klachten naar diagnose.`}</Inline></p>
    </div>
  )
}
