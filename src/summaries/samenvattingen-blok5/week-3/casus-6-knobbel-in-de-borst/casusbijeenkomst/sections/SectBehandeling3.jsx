import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling:`}</Inline></SubHeading>
      <PBody text={`**orale antibiotica**`} />
      <p className="leading-relaxed"><Inline>{`goede **pijnstilling**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`zoeken naar een **port d’entrée**, bijvoorbeeld **tinea pedis**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`roodheid aftekenen om het beloop te volgen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`vaak eerste keus: **flucloxacilline oraal 4 dd 500 mg gedurende 10–14 dagen**`}</Inline></p>
      <PBody text={`**ambulante compressietherapie** zodra de pijn dat toelaat kan de pijn verlichten, de genezing versnellen en de kans op lymfoedeem en recidief verkleinen`} />
      <p className="leading-relaxed"><Inline>{`5. Lymfoedeem`}</Inline></p>
    </div>
  )
}
