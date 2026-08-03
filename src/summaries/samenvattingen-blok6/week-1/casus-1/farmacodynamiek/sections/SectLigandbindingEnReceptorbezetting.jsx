import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ligandbinding en receptorbezetting`}</Inline></SubHeading>
      <PBody text={`Om de werking van een geneesmiddel te begrijpen, kijk je naar de relatie tussen de concentratie van het ligand en de binding aan de receptor. In een grafiek kun je zien hoeveel ligand specifiek aan de receptor bindt bij verschillende concentraties. Als je dezelfde gegevens op een **logaritmische schaal** zet, wordt het steile deel van de curve beter zichtbaar.`} />
      <PBody text={`Een belangrijke term hierbij is **Bmax**: dat is de maximale hoeveelheid binding die bereikt kan worden. De **K**-waarde geeft aan bij welke concentratie de helft van die maximale binding wordt bereikt.`} />
      <SubHeading><Inline>{`Volle agonist en partiële agonist`}</Inline></SubHeading>
      <PBody text={`Een **volle agonist** kan het maximale effect bereiken voor een specifieke receptor in een specifiek weefsel, zelfs als niet alle receptoren bezet zijn. Er is dan sprake van een **receptorreserve**: je hebt dus niet 100% receptorbezetting nodig om het maximale effect te krijgen.`} />
      <PBody text={`Een **partiële agonist** kan dat niet. Zelfs als alle receptoren bezet zijn, blijft het maximale effect lager dan dat van een volle agonist.`} />
      <PBody text={`**Tabel 2. Volle agonist versus partiële agonist**`} />
      <DataTable rows={[["Begrip", "Kenmerk"], ["Volle agonist", "Bereikt maximaal effect, vaak al bij minder dan 100% receptorbezetting"], ["Partiële agonist", "Bereikt ook bij 100% receptorbezetting niet het maximale effect van een volle agonist"]]} />
    </div>
  )
}
