import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Val- en fractuurrisico hangen bij ouderen vaak nauw samen. Bij een val analyseer je altijd de omstandigheden, mogelijke syncope, medicatie, orthostase, mobiliteit, zintuigen en neurologische of cardiale oorzaken. Bij fractuurrisico denk je vooral aan osteoporose, een aandoening met lage botmassa en verlies van botstructuur. De diagnose stel je met DXA, eventueel aangevuld met VFA. Het fractuurrisico beoordeel je met risicofactoren, een fractuurrisicoscore en zo nodig FRAX. De behandeling bestaat meestal uit een oraal bisfosfonaat plus voldoende calcium en vitamine D, met goede instructie over inname en bijwerkingen.`}</Inline></p>
    </div>
  )
}
