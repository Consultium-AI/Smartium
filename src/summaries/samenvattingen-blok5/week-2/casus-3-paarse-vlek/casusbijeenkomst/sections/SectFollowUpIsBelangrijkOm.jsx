import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Follow-up is belangrijk om:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`recidief vroeg te herkennen;`}</Inline></li>
        <li><Inline>{`nieuwe primaire melanomen op te sporen;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`de patiënt te leren zelf verdachte huidafwijkingen te herkennen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De follow-up gebeurt meestal via de dermatoloog. Bij adjuvante behandeling hoort daarnaast beeldvorming en lichamelijk onderzoek.`}</Inline></p>
    </div>
  )
}
