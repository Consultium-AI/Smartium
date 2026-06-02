import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`Bij de tweede casus is het belangrijk om een bloedingsneiging te overwegen. De klachten die daarbij passen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`blauwe plekken;`}</Inline></li>
        <li><Inline>{`lang nabloeden na wondjes;`}</Inline></li>
        <li><Inline>{`slijmvliesbloedingen;`}</Inline></li>
        <li><Inline>{`soms spontane bloedingen;`}</Inline></li>
        <li><Inline>{`afwijkingen in stollingsonderzoek of von Willebrand-factor.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De combinatie van klachten en laboratoriumonderzoek helpt om dit verder uit te zoeken.`}</Inline></p>
    </div>
  )
}
