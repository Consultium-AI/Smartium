import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 2. Waarom deze bepalingen?`}</Inline></SubHeading>
      <DataTable rows={[["Bepaling", "Doel"], ["---", "---"], ["PT", "beoordeling van de extrinsieke stollingsroute"], ["APTT", "beoordeling van de intrinsieke stollingsroute"], ["Trombocyten", "uitsluiten van trombocytopenie"], ["VWF:Ag", "hoeveelheid von Willebrand-factor"], ["VWF:Rco", "functie van von Willebrand-factor"], ["FVIII:C", "factor VIII-activiteit"], ["Hb", "bloedverlies of anemie opsporen"], ["Leukocyten", "algemene indruk, niet de hoofdvraag"]]} />
    </div>
  )
}
