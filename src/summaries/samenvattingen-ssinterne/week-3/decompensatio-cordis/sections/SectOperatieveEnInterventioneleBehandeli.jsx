import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Operatieve en interventionele behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Afhankelijk van de oorzaak van het hartfalen kan een operatieve of interventionele behandeling nodig zijn. Dat gebeurt bijvoorbeeld door de interventiecardioloog of de thoraxchirurg.`}</Inline></p>
    </div>
  )
}
