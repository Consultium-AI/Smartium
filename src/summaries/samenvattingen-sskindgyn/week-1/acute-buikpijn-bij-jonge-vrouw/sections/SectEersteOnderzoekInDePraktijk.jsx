import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerste onderzoek in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw in de fertiele leeftijd met buikpijn moet je altijd een zwangerschapstest doen. Dat is een essentieel eerste aanvullend onderzoek. Zonder zwangerschapstest kun je een EUG niet goed uitsluiten.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** welk onderzoek doe je minimaal bij buikpijn in de huisartsenpraktijk?
**Kort antwoord:** een zwangerschapstest.`} />
    </div>
  )
}
