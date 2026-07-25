import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nierfunctievervangende therapie is nodig bij terminale nierinsufficiëntie. De belangrijkste keuzes zijn niertransplantatie, hemodialyse, continue hemofiltratie en peritoneale dialyse, of soms conservatief beleid. De keuze hangt af van nierfunctie, co-morbiditeit, kwetsbaarheid en de verwachte invloed op kwaliteit van leven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Niertransplantatie geeft meestal de beste nierfunctie en levensverwachting, vooral als die pre-emptief en met een levende donor kan plaatsvinden. Daarvoor zijn een goede immunologische match en levenslange immuunsuppressie nodig. Belangrijke complicaties van immuunsuppressie zijn infecties, cardiovasculaire ziekte en maligniteiten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hemodialyse verwijdert afvalstoffen via diffusie en vocht via ultrafiltratie in een kunstnier. Daarvoor is meestal een dialyseshunt nodig. Bij instabiele patiënten kan continue hemofiltratie worden gebruikt. Peritoneale dialyse gebruikt het peritoneum als filter en kan in een automatische vorm ’s nachts worden uitgevoerd. Belangrijke complicaties zijn peritonitis en, bij langdurig gebruik, scleroserende peritonitis.`}</Inline></p>
    </div>
  )
}
