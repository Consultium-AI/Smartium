import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gedragsobservatie en lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast het gesprek kijk je ook goed naar het gedrag van de patiënt. Dat geeft vaak belangrijke aanwijzingen.`}</Inline></p>
    </div>
  )
}
