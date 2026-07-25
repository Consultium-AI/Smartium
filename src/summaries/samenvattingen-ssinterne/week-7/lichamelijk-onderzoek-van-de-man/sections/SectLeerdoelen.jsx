import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het lichamelijk onderzoek van de man uitvoeren, met aandacht voor het liesgebied, de genitaliën en het rectaal onderzoek;`}</Inline></li>
        <li><Inline>{`de belangrijkste anatomische verhoudingen van de mannelijke inwendige en uitwendige genitalia benoemen;`}</Inline></li>
        <li><Inline>{`veelvoorkomende afwijkingen van scrotum, penis, lies en prostaat herkennen;`}</Inline></li>
        <li><Inline>{`uitleggen hoe je inspectie en palpatie van de genitalia en het rectum systematisch uitvoert;`}</Inline></li>
        <li><Inline>{`de belangrijkste prostaatzones en de klinische betekenis daarvan beschrijven;`}</Inline></li>
        <li><Inline>{`de stadia van prostaatcarcinoom globaal onderscheiden.`}</Inline></li>
      </ul>
    </div>
  )
}
