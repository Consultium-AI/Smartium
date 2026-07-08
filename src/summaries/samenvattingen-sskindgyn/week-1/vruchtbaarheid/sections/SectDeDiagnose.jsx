import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De diagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na afronding van het oriënterend fertiliteitsonderzoek kun je concluderen dat er sprake is van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een primair subfertiel paar;`}</Inline></li>
        <li><Inline>{`een primair subfertiele vrouw;`}</Inline></li>
        <li><Inline>{`een secundair subfertiele man;`}</Inline></li>
        <li><Inline>{`een vruchtbaarheidsstoornis die al 24 maanden bestaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er is geen duidelijke oorzaak gevonden. Daarom wordt de spontane kans op zwangerschap voor het komende jaar berekend met een prognostisch model.`}</Inline></p>
    </div>
  )
}
