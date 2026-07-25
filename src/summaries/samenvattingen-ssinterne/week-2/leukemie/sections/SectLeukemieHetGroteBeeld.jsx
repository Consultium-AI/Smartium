import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leukemie: het grote beeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Leukemie is een kwaadaardige aandoening van het bloedvormende systeem. Het belangrijkste idee is dat er een ontsporing is van voorlopercellen of rijpere bloedcellen, waardoor normale bloedaanmaak wordt verdrongen. Daardoor ontstaan klachten door tekort aan normale bloedcellen, of juist door ophoping van afwijkende cellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt in deze stof steeds gekeken naar vier hoofdvormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acute myeloïde leukemie (AML)`}</Inline></li>
        <li><Inline>{`acute lymfatische leukemie (ALL)`}</Inline></li>
        <li><Inline>{`chronische myeloïde leukemie (CML)`}</Inline></li>
        <li><Inline>{`chronische lymfatische leukemie (CLL)`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het onderscheid tussen deze vormen is belangrijk, omdat de diagnostiek, prognose en behandeling sterk verschillen.`}</Inline></p>
      <SubHeading><Inline>{`Kernverschil: acuut versus chronisch`}</Inline></SubHeading>
      <PBody text={`Bij een **acute leukemie** gaat het om snel progressieve ziekte met veel onrijpe cellen, de zogenaamde **blasten**. Door verdringing van de normale beenmergfunctie ontstaan vaak anemie, trombocytopenie en soms leukopenie.`} />
      <PBody text={`Bij een **chronische leukemie** zie je meestal meer uitgerijpte cellen en een langzamer beloop. Klachten kunnen lang afwezig zijn of vaag zijn.`} />
      <PBody text={`**Aandachtsvraag:** Wat is het belangrijkste verschil tussen acute en chronische leukemie?
**Mini-antwoord:** Acute leukemie is snel en onrijp; chronische leukemie is trager en bevat meer uitgerijpte cellen.`} />
    </div>
  )
}
