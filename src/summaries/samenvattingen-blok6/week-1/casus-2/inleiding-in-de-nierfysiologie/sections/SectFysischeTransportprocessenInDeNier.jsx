import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fysische transportprocessen in de nier`}</Inline></SubHeading>
      <PBody text={`In de nier spelen verschillende fysische transportprocessen een rol. De belangrijkste zijn **diffusie**, **osmose**, **filtratie** en **convectie**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Diffusie** betekent dat deeltjes zich verplaatsen van een hoge naar een lage concentratie, totdat er evenwicht ontstaat.`}</Inline></li>
        <li><Inline>{`**Osmose** is de verplaatsing van water door een halfdoorlaatbaar membraan, meestal naar de kant met meer opgeloste deeltjes.`}</Inline></li>
        <li><Inline>{`**Filtratie** betekent dat water door een membraan wordt geperst door drukverschil.`}</Inline></li>
        <li><Inline>{`**Convectie** is het meebewegen van kleine deeltjes met dat gefilterde water.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De nier gebruikt al deze processen. In de glomerulus is filtratie belangrijk. In de tubulus speelt diffusie een grote rol, vaak via specifieke kanalen of transporteiwitten. In de verzamelbuis is osmose belangrijk, vooral voor de waterreabsorptie.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Wat is het verschil tussen filtratie en osmose?
**Mini-antwoord:** Bij filtratie duwt druk water door een membraan; bij osmose verplaatst water zich omdat aan één kant meer opgeloste deeltjes zitten.`} />
      <PBody text={`Ook bij dialyse worden deze principes gebruikt. Bij **hemodialyse** speelt vooral filtratie met convectie en diffusie een rol. Bij **peritoneale dialyse** zijn diffusie en osmose belangrijk. Daar wordt glucose aan het dialysaat toegevoegd, zodat het water uit de patiënt wordt getrokken door het osmotische verschil.`} />
    </div>
  )
}
