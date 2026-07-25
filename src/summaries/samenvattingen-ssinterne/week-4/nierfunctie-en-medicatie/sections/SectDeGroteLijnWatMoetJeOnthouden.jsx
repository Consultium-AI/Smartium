import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De grote lijn: wat moet je onthouden?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze stof draait om drie samenhangende principes:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Medicatie kan nierfunctiestoornissen veroorzaken**, zoals lithium dat chronische tubulo-interstitiële nefritis kan geven.`}</Inline></li>
        <li><Inline>{`**Nierfunctiestoornissen kunnen medicatie gevaarlijker maken**, doordat middelen minder goed worden uitgescheiden en kunnen opstapelen.`}</Inline></li>
        <li><Inline>{`**Nierfunctiestoornissen kunnen de keuze van het middel beperken**, omdat sommige middelen minder werkzaam zijn of gecontra-indiceerd zijn.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom moet je bij patiënten met nierfunctiestoornissen altijd nadenken over zowel effectiviteit als veiligheid van medicatie.`}</Inline></p>
    </div>
  )
}
