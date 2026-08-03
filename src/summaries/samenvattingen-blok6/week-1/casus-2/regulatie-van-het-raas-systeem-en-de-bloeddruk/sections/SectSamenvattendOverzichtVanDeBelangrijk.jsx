import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend overzicht van de belangrijkste verbanden`}</Inline></SubHeading>
      <SubHeading><Inline>{`Tabel 5. Van prikkel tot effect`}</Inline></SubHeading>
      <DataTable rows={[["Prikkel", "Reactie van het RAAS", "Gevolg"], ["Hypotensie", "RAAS wordt geactiveerd", "Bloeddruk stijgt"], ["Hypovolemie", "RAAS wordt geactiveerd", "Natrium- en waterretentie"], ["Uitdroging", "RAAS wordt geactiveerd", "Vocht vasthouden"], ["Hartfalen", "RAAS kan pathologisch actief zijn", "Extra belasting van bloeddruk en volume"], ["RAAS-remming", "Minder angiotensine II/aldosteronwerking", "Bloeddruk daalt"], ["NSAID-gebruik", "Verstoorde nierdoorbloeding", "Nierfunctie kan achteruitgaan"]]} />
    </div>
  )
}
