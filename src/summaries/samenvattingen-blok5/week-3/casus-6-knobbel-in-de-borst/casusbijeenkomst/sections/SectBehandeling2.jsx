import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`starten met **antistolling**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zo snel mogelijk **ambulante compressietherapie** gedurende minimaal 6 maanden`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij een **niet-uitgelokte trombose** moet onderliggende pathologie worden uitgesloten, zoals maligniteit of een stollingsstoornis`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij een **uitgelokte trombose** is er een duidelijke aanleiding, zoals immobilisatie of orale anticonceptie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`4. Erysipelas en cellulitis`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een man van 76 jaar met een pijnlijk rood onderbeen, koorts en algehele malaise past **erysipelas** het best. Het acute begin, de snelle progressie en de ziek indruk zijn hierbij belangrijk.`}</Inline></p>
    </div>
  )
}
