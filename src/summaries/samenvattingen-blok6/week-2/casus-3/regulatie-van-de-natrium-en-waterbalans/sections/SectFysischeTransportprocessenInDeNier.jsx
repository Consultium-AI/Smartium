import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysische transportprocessen in de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de nier spelen verschillende fysische transportprocessen een rol: diffusie, osmose, filtratie en convectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Diffusie is verplaatsing van deeltjes van een hoge naar een lage concentratie. Osmose is verplaatsing van water door een halfdoorlaatbaar membraan. Filtratie is verplaatsing door een drukverschil, en de kleine deeltjes die daarbij worden meegesleept, verplaatsen zich via convectie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Fysische transportprocessen`}</Inline></SubHeading>
      <DataTable rows={[["Proces", "Wat beweegt?", "Waarop berust het?"], ["Diffusie", "Opgeloste deeltjes", "Concentratieverschil"], ["Osmose", "Water", "Osmotisch verschil"], ["Filtratie", "Water en kleine deeltjes", "Drukverschil"], ["Convectie", "Kleine deeltjes mee met water", "Gevolg van filtratie"]]} />
      <p className="leading-relaxed"><Inline>{`In de nier worden deze processen op verschillende manieren gebruikt. In de glomerulus is filtratie belangrijk. In de tubulus speelt diffusie een grote rol, vaak via specifieke kanalen of transporteiwitten. In de verzamelbuis is osmose essentieel voor waterreabsorptie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook in dialyse worden deze principes benut. Bij hemodialyse worden vooral filtratie en convectie gebruikt, samen met diffusie. Bij peritoneale dialyse spelen vooral diffusie en osmose een rol. Bij peritoneale dialyse wordt glucose aan het dialysaat toegevoegd om een osmotisch effect te creëren, zodat water uit de patiënt wordt getrokken.`}</Inline></p>
    </div>
  )
}
