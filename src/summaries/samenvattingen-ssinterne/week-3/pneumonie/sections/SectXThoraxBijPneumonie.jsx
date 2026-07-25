import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`X-thorax bij pneumonie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De X-thorax is een belangrijk onderzoek bij verdenking op pneumonie. Je kunt grofweg twee patronen zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **lobair infiltraat**, waarbij een hele longkwab of een groot deel daarvan ontstoken is;`}</Inline></li>
        <li><Inline>{`een **alveolair-interstitieel beeld**, waarbij de afwijkingen meer diffuus verspreid zijn.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënt is sprake van een alveolair-interstitieel beeld. Dat patroon past het vaakst bij een atypische pneumonie of een virale pneumonie.`}</Inline></p>
    </div>
  )
}
