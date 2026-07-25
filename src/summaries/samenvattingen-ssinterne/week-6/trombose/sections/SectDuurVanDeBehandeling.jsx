import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Duur van de behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De duur van antistolling hangt af van twee dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de kans op recidief trombose;`}</Inline></li>
        <li><Inline>{`de kans op bloeding.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij kijk je vooral naar de oorzaak van de trombose: was er een tijdelijke risicofactor of was de trombose idiopathisch?`}</Inline></p>
    </div>
  )
}
