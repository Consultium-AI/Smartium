import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De diagnostische richting: ketonen, lever en voeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een hypoglycemie zijn drie dingen heel belangrijk om de oorzaak te vinden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de relatie met voeding of vasten;`}</Inline></li>
        <li><Inline>{`de aanwezigheid van ketonen;`}</Inline></li>
        <li><Inline>{`de grootte van de lever.`}</Inline></li>
      </ul>
    </div>
  )
}
