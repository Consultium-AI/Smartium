import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Functieverdeling van de nieren`}</Inline></SubHeading>
      <PBody text={`Naast de beschrijving van de beelden wordt ook de **functieverdeling** berekend. Daarbij wordt de totale nierfunctie op **100%** gezet. Het maakt dus niet uit hoe slecht de totale nierfunctie is: de verdeling tussen links en rechts wordt altijd relatief weergegeven.`} />
      <PBody text={`Hiervoor worden de eerste 3 minuten van de beelden opgeteld. Daarna trek je contouren om de nieren, de zogenaamde **ROI’s** (*region of interest*). Vervolgens tel je de counts per nier op en bereken je de links-rechtsverdeling.`} />
      <PBody text={`Een verschil is afwijkend als het **meer dan 10%** is.`} />
      <SubHeading><Inline>{`Tabel 2. Functieverdeling`}</Inline></SubHeading>
      <DataTable rows={[["Verdeling", "Beoordeling"], ["45% / 55%", "Normaal"], ["44% / 56%", "Afwijkend"]]} />
    </div>
  )
}
