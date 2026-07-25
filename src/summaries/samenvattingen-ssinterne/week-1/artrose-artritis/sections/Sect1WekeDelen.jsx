import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`1. Weke delen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zwelling`}</Inline></li>
        <li><Inline>{`calcificaties`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zwelling van de weke delen kan bijvoorbeeld het eerste teken van RA zijn. Calcificaties in de weke delen kunnen passen bij jicht of andere processen.`}</Inline></p>
    </div>
  )
}
