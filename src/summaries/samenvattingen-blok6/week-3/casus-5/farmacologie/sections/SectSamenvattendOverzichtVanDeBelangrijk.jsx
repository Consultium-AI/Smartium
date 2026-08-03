import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend overzicht van de belangrijkste verschillen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 5. Kernverschillen tussen de drie bètablokkers"], ["", "**Metoprolol**", "**Atenolol**", "**Propranolol**"], ["**Selectiviteit**", "Selectief", "Selectief", "Aselectief"], ["**Receptorvoorkeur**", "Vooral bèta1", "Vooral bèta1", "Bèta1 en bèta2"], ["**Selectiviteit bij hoge concentratie**", "Wordt kleiner", "Wordt kleiner, maar blijft in het model duidelijk aanwezig", "Niet van toepassing als aselectief middel"], ["**Interacties via CYP2D6**", "Relevant", "Niet relevant in deze context", "Relevant"], ["**Voorkeur bij fluoxetine**", "Minder geschikt", "Voorkeur", "Minder geschikt"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
