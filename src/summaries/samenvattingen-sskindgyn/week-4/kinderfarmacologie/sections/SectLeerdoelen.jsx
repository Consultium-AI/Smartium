import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`benoemen welke medicatieveiligheidsaspecten bij kinderen belangrijk zijn;`}</Inline></li>
        <li><Inline>{`verschillen in farmacokinetiek en farmacodynamiek benoemen tussen neonaten, kinderen en volwassenen;`}</Inline></li>
        <li><Inline>{`een betrouwbare informatiebron gebruiken voor indicatie, contra-indicatie, dosering en bijwerkingen bij kinderen;`}</Inline></li>
        <li><Inline>{`uitleggen wat off-label en unlicensed voorschrijven is;`}</Inline></li>
        <li><Inline>{`de meest geschikte toedienvorm voor een kind kiezen.`}</Inline></li>
      </ul>
    </div>
  )
}
