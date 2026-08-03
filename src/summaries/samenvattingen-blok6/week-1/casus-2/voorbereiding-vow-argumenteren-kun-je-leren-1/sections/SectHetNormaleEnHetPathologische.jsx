import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het normale en het pathologische`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hypertensie wordt duidelijk hoe moeilijk het is om een scherpe grens te trekken tussen normaal en pathologisch. Zeker bij oudere mensen neemt de variatie in fysiologische waarden toe. Een risicofactor is niet automatisch een ziekte, maar kan wel aanleiding geven tot behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de praktijk vertalen artsen en patiënten statistisch risico vaak naar een simpele indeling: normaal of abnormaal, ziek of gezond. Maar juist behandeling kan iemand ook echt tot patiënt maken, bijvoorbeeld door bijwerkingen. Soms is het dus niet de aandoening zelf, maar de behandeling die ziekte-ervaring oproept.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tegelijk zijn risicofactoren ook politiek en economisch belangrijk geworden. Door de hoge kosten van chronische ziekten zijn ze onderdeel geworden van beleid en zorgorganisatie. Zo bemiddelen surveillance medicine en informational medicine tussen individuele lichamen, laboratoria en de verzorgingsstaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
