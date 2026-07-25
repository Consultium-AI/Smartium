import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is hyponatriëmie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyponatriëmie betekent dat het serum-natrium lager is dan 136 mmol/l. Ondanks de naam gaat het hierbij in de kern vooral om een stoornis van de waterbalans. Er is dus relatief te veel water ten opzichte van natrium in het extracellulaire vocht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat is een belangrijk uitgangspunt: bij hyponatriëmie is niet alleen het natrium “laag”, maar is de verhouding tussen water en natrium verstoord. Patiënten met hyponatriëmie kunnen daarbij euvolemisch, hypovolemisch of hypervolemisch zijn.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is hyponatriëmie vooral een waterprobleem?
**Mini-antwoord:** omdat de hoeveelheid water relatief toeneemt ten opzichte van natrium in het extracellulaire compartiment.`} />
      <p className="leading-relaxed"><Inline>{`In meer dan 90% van de gevallen is antidiuretisch hormoon, ook wel ADH of vasopressine genoemd, niet onderdrukt terwijl dat bij een hypo-osmolaire hyponatriëmie juist wel zou moeten gebeuren. Dat betekent dat de normale regeling van de waterbalans verstoord is.`}</Inline></p>
    </div>
  )
}
