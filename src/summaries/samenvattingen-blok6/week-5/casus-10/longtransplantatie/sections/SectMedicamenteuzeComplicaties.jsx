import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicamenteuze complicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nierfunctiestoornissen`}</Inline></li>
        <li><Inline>{`vaatlijden`}</Inline></li>
        <li><Inline>{`diabetes mellitus`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Omdat complicaties zo belangrijk zijn, worden patiënten na transplantatie nauwkeurig opgevolgd. De zorg richt zich op het vroeg opsporen, voorkomen en behandelen van problemen.`}</Inline></p>
    </div>
  )
}
