import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inductietherapie en onderhoudstherapie`}</Inline></SubHeading>
      <PBody text={`Bij een milde tot matige ziekte van Crohn in de ileocaecale regio is **budesonide** de aangewezen inductietherapie. Dit werkt goed om een opvlamming te remmen en heeft minder bijwerkingen dan prednison.`} />
      <PBody text={`Voor onderhoud is **azathioprine** aangewezen. Prednison en budesonide zijn geen onderhoudsmedicijnen. Mesalazine en ciproxin zijn hiervoor niet effectief.`} />
      <SubHeading><Inline>{`Tabel 1. Behandeling bij milde tot matige Crohn in de ileocaecale regio`}</Inline></SubHeading>
      <DataTable rows={[["Fase", "Voorkeursbehandeling", "Waarom?"], ["Inductie", "Budesonide", "Effectief en gunstiger bijwerkingenprofiel dan prednison"], ["Onderhoud", "Azathioprine", "Geschikt als onderhoudsmedicatie"], ["Niet geschikt als onderhoud", "Prednison, budesonide", "Geen onderhoudsmedicatie"], ["Niet effectief als onderhoud", "Mesalazine, ciproxin", "Niet effectief"]]} />
    </div>
  )
}
