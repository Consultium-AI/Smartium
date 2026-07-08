import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van verminderde vruchtbaarheid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Verminderde vruchtbaarheid kan verschillende oorzaken hebben. Die kunnen liggen bij de man, de vrouw, of bij beiden. Soms blijft de oorzaak onbegrepen.`}</Inline></p>
      <PBody text={`**Tabel 2. Globale oorzaken van subfertiliteit**`} />
      <DataTable rows={[["Locatie", "Voorbeelden"], ["Mannelijk", "Stoornis in spermatogenese, obstructie, ejaculatiestoornis"], ["Vrouwelijk", "Ovulatiestoornis, oöcytprobleem, tubapathologie, cervix- of uterusproblemen"], ["Gecombineerd", "Problemen bij beide partners"], ["Onbegrepen", "Geen duidelijke oorzaak gevonden"]]} />
      <p className="leading-relaxed"><Inline>{`Bij de man kan het probleem zitten in de aanmaak van zaadcellen, in de afvoer van zaadcellen of in het ejaculeren zelf. Bij de vrouw kan het gaan om problemen met de eisprong, de eicel, de eileiders, de baarmoeder of factoren zoals endometriose. Ook psychische, seksuologische en fysieke factoren kunnen meespelen.`}</Inline></p>
    </div>
  )
}
