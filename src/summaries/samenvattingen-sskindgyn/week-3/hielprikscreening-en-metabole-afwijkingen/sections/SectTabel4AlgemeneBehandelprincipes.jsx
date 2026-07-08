import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 4. Algemene behandelprincipes`}</Inline></SubHeading>
      <DataTable rows={[["Principe", "Uitleg"], ["Substraatreductie", "minder van de schadelijke stof in de voeding"], ["Suppletie van tekort", "aanvullen van ontbrekende stof"], ["Cofactortherapie", "vitamine of andere cofactor geven"], ["Omzetting bevorderen", "een blokkade omzeilen of verminderen"], ["Enzymtherapie", "ontbrekend enzym aanvullen"], ["Gentherapie", "oorzaak op DNA-niveau aanpakken"]]} />
    </div>
  )
}
