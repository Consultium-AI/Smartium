import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is de ABCDE-methodiek?`}</Inline></SubHeading>
      <PBody text={`De ABCDE-methodiek is een systematische manier om een acuut zieke of gewonde patiënt te beoordelen. Het doel is om snel te ontdekken of er bedreigde of gestoorde vitale functies zijn die direct ingrijpen nodig hebben. Het uitgangspunt is: **treat first what kills first**. Dat betekent dat je eerst kijkt naar problemen die direct levensbedreigend zijn.`} />
      <p className="leading-relaxed"><Inline>{`De ABCDE bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**A: Airway** – luchtweg`}</Inline></li>
        <li><Inline>{`**B: Breathing** – ademhaling`}</Inline></li>
        <li><Inline>{`**C: Circulation** – circulatie en bloedingen`}</Inline></li>
        <li><Inline>{`**D: Disabilities** – neurologische toestand`}</Inline></li>
        <li><Inline>{`**E: Exposure / Environment** – volledig onderzoek en voorkomen van hypothermie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Iedere patiënt kan vitale bedreigingen hebben, op elke afdeling. Juist daarom is een vaste, systematische aanpak belangrijk: zo verklein je de kans dat je iets mist.`}</Inline></p>
      <SubHeading><Inline>{`Primary, re-assessment en secondary assessment`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de opvang van een acuut zieke patiënt werk je in drie stappen:`}</Inline></p>
      <DataTable rows={[["Fase", "Wat doe je?", "Doel"], ["Primary assessment", "ABCDE systematisch beoordelen en direct behandelen", "Levensbedreigende problemen herkennen en stabiliseren"], ["Re-assessment", "Opnieuw ABCDE controleren", "Effect van behandeling beoordelen en veranderingen opsporen"], ["Secondary assessment", "Volledig anamnese en lichamelijk onderzoek", "Verdere diagnostiek en definitieve behandeling"]]} />
      <p className="leading-relaxed"><Inline>{`De secondary assessment start pas als de vitale functies onder controle zijn. Aanvullend onderzoek mag nooit leiden tot vertraging van levensreddende handelingen.`}</Inline></p>
    </div>
  )
}
