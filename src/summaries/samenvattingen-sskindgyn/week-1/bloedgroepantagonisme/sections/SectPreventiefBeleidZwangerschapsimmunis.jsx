import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventief beleid: zwangerschapsimmunisatie en cEK-beleid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In Nederland wordt standaard ABO- en RhD-compatibel bloed gegeven. Toch is de kans op antistofforming tegen c, E en k ook relatief groot. Daarom bestaat het preventieve cEK-beleid voor meisjes en vrouwen jonger dan 46 jaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat betekent:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het Rh- en Kell-fenotype wordt bepaald;`}</Inline></li>
        <li><Inline>{`afhankelijk van dat fenotype worden compatibele bloedproducten geselecteerd;`}</Inline></li>
        <li><Inline>{`deze producten zijn niet alleen ABO- en RhD-compatibel, maar ook compatibel voor RhcE en Kell.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`PSIE`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`PSIE staat voor Prenatale Screening op Infectieziekten en Erytrocytenimmunisatie. Bij de zwangere wordt bloed afgenomen voor screening.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Belangrijke onderdelen van de PSIE"], ["Tijdstip", "Onderzoek"], ["Rond week 13", "Screening op irregulaire antistoffen en bepaling van Rhc"], ["Week 27", "Tweede screening op irregulaire antistoffen"], ["Week 27 bij Rhc-negatieve zwangeren", "Opsporen van laat gevormde anti-c en andere antistoffen"], ["Week 27", "Foetale RhD-typering"], ["Vanaf week 12", "Foetale cDE-typering mogelijk"], ["Vanaf week 14", "Foetale Kell-typering mogelijk"]]} />
      <SubHeading><Inline>{`Anti-D-profylaxe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`RhD-negatieve vrouwen krijgen anti-Rhesus D-immunoglobuline profylactisch toegediend in de 30e week van de zwangerschap. Ook binnen 72 uur na de bevalling, een ingreep of een trauma kan anti-D-profylaxe worden gegeven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Niet elke RhD-negatieve vrouw heeft het nodig na de bevalling: als de baby RhD-negatief is, is er geen indicatie. Een deel van de RhD-negatieve vrouwen krijgt namelijk een RhD-negatief kind.`}</Inline></p>
      <SubHeading><Inline>{`Foetomaternale transfusie en berekening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De mate van foetomaternale transfusie wordt tegenwoordig vastgesteld met flowcytometrie. Vroeger werd de Kleihauer-Betke-test gebruikt. Daarbij werden foetale erytrocyten met HbF onderscheiden van maternale erytrocyten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`HbF heeft een hogere zuurstofaffiniteit dan HbA. Daardoor kan de foetus zuurstof opnemen uit het maternale bloed.`}</Inline></p>
    </div>
  )
}
