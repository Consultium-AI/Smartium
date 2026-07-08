import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypothermie voorkomen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Temperatuurverlies is een belangrijk risico bij de pasgeborene. Daarom doe je alles om afkoeling te voorkomen, maar ook hyperthermie moet worden vermeden. De streeflichaamstemperatuur ligt tussen 36,5 en 37,5 °C.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Algemene maatregelen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`beademingsgassen verwarmen en bevochtigen als dat kan`}</Inline></li>
        <li><Inline>{`de opvangtafel warmer dan 37,5 °C houden`}</Inline></li>
        <li><Inline>{`tochtschotten omhoog laten staan`}</Inline></li>
        <li><Inline>{`deuren zo min mogelijk openen en sluiten`}</Inline></li>
        <li><Inline>{`temperatuur monitoren als dat mogelijk is`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Verschil tussen à terme en prematuur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een à terme pasgeborene droog je het kind volledig af, zet je een muts op, verwijder je natte doeken en dek je het kind toe met een droge, warme doek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een prematuur jonger dan 32 weken droog je het kind juist niet af. Je plaatst het kind tot aan de kin in een plastic zak, laat het hoofd vrij, dept het hoofd droog en zet een muts op. De warmtestraler op 100% is nodig om verdamping in de plastic zak te bevorderen; daardoor ontstaat een hoge luchtvochtigheid en koelt het kind minder snel af.`}</Inline></p>
      <DataTable rows={[["Tabel 1. Temperatuurmaatregelen bij de opvang van de pasgeborene"], ["À terme", "Volledig afdrogen, muts op, natte doeken weg, droge warme doek"], ["Prematuur < 32 weken", "Niet afdrogen, in plastic zak tot de kin, hoofd vrij, hoofd droogdeppen, muts op"]]} />
    </div>
  )
}
