import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de C`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de C zoek je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`shock;`}</Inline></li>
        <li><Inline>{`ernstige bloedingen;`}</Inline></li>
        <li><Inline>{`andere levensbedreigende circulatieproblemen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De vier shocktypen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hypovolemisch**`}</Inline></li>
        <li><Inline>{`**cardiogeen**`}</Inline></li>
        <li><Inline>{`**distributief**`}</Inline></li>
        <li><Inline>{`**obstructief**`}</Inline></li>
      </ul>
    </div>
  )
}
