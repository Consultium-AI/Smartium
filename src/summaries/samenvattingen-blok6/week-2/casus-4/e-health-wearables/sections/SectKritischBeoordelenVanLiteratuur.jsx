import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kritisch beoordelen van literatuur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk leerpunt van deze e-module is dat je kritisch moet kijken naar zowel commerciële claims als wetenschappelijke studies. Dat betekent onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`controleren of een claim echt terug te vinden is in een artikel;`}</Inline></li>
        <li><Inline>{`kijken naar de opzet van het onderzoek;`}</Inline></li>
        <li><Inline>{`begrijpen wat de referentiemeting of ground truth is;`}</Inline></li>
        <li><Inline>{`letten op uitkomstmaten zoals sensitiviteit en PPV;`}</Inline></li>
        <li><Inline>{`beseffen dat technologie snel verandert en onderzoek daardoor snel verouderd kan raken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij wearables is het dus niet genoeg om te weten dát ze iets meten. Je moet ook weten hoe goed ze dat doen en wat de klinische betekenis daarvan is.`}</Inline></p>
    </div>
  )
}
