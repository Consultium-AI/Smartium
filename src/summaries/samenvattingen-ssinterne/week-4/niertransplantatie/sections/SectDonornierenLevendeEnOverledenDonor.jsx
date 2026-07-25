import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Donornieren: levende en overleden donor`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een donornier kan afkomstig zijn van een levende of overleden donor. Levende donoren kunnen bloedverwant of niet-verwant zijn. Niet-verwante donoren kunnen bijvoorbeeld een partner, goede vriend of een altruïstische, anonieme donor zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Overleden donoren kunnen op twee manieren donor worden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`na hartdood: donation after circulatory death (DCD);`}</Inline></li>
        <li><Inline>{`na hersendood: donation after brain death (DBD).`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom heeft een levende donornier vaak betere resultaten?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nieren van levende donoren functioneren gemiddeld beter en langer dan nieren van overleden donoren. Dat komt vooral doordat levende donoren alleen mogen doneren als zij gezond genoeg zijn, en doordat de nier direct na uitname in de ontvanger wordt geplaatst. De start is dus gunstiger. Een pre-emptieve transplantatie met een levende donor geeft de beste resultaten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Toch kan de levensduur van een transplantaat beïnvloed worden door complicaties tijdens of na de operatie, afstoting, infecties, bijwerkingen van medicatie en co-morbiditeit van de ontvanger.`}</Inline></p>
      <SubHeading><Inline>{`Plaatsing van het transplantaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij volwassenen wordt een niertransplantaat meestal in de fossa iliaca geplaatst, links of rechts. De aansluiting gebeurt als volgt:`}</Inline></p>
      <DataTable rows={[["Tabel 3. Aansluitingen van het niertransplantaat"], ["Donornierarterie", "Arteria iliaca externa"], ["Donorniervene", "Vena iliaca externa"], ["Ureter", "Blaas"]]} />
    </div>
  )
}
