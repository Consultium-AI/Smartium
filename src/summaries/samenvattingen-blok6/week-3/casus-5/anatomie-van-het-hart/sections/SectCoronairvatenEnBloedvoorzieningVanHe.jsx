import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Coronairvaten en bloedvoorziening van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart heeft zijn eigen bloedvoorziening via de coronairarteriën. Deze vertrekken net boven de aortakleppen uit de aorta. Er zijn twee hoofdvaten: de a. coronaria dextra en de a. coronaria sinistra.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De a. coronaria sinistra splitst zich snel op in twee belangrijke takken. De ramus circumflexus loopt naar links in de groeve tussen het linker atrium en linker ventrikel. De ramus interventricularis anterior loopt aan de voorzijde van het hart in de groeve tussen de ventrikels; in de kliniek wordt deze tak vaak LAD genoemd. De a. coronaria dextra loopt naar rechts tussen rechter atrium en rechter ventrikel. Dorsaal geeft deze vaak de ramus interventricularis posterior af, ook wel PDA genoemd.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke coronairvaten`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Verloop / betekenis"], ["a. coronaria dextra", "loopt rechts tussen rechter atrium en rechter ventrikel"], ["a. coronaria sinistra", "splitst snel in twee hoofdvertakkingen"], ["ramus circumflexus", "loopt links in de groeve tussen linker atrium en linker ventrikel"], ["ramus interventricularis anterior", "loopt ventraal tussen de ventrikels; vaak LAD genoemd"], ["ramus interventricularis posterior", "loopt dorsaal tussen de ventrikels; vaak PDA genoemd"]]} />
      <p className="leading-relaxed"><Inline>{`Bij het onderzoeken van de coronairvaten wordt vaak coronair angiografie gebruikt. Daarbij wordt via een katheter, meestal ingebracht via de lies of pols, contrastvloeistof in de coronairarteriën gespoten. Zo worden vernauwingen of afsluitingen zichtbaar op röntgenbeelden. Dit is klinisch belangrijk bij verdenking op coronairlijden.`}</Inline></p>
    </div>
  )
}
