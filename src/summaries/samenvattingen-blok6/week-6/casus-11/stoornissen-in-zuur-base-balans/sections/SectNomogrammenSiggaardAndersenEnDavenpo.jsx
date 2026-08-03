import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nomogrammen: Siggaard-Andersen en Davenport`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om zuur-base stoornissen snel te beoordelen kunnen nomogrammen worden gebruikt.`}</Inline></p>
      <PBody text={`Het **Siggaard-Andersen nomogram** gebruikt pH en pCO₂ om het actuele bicarbonaat en het base excess af te lezen. Het heeft drie assen: pH, pCO₂ en bicarbonaat. Daarmee kun je snel zien of een patiënt normaal is, een metabole stoornis heeft, een respiratoire stoornis heeft, of een combinatie daarvan.`} />
      <PBody text={`Het **Davenport nomogram** zet bicarbonaat uit tegen pH bij verschillende pCO₂-waarden. Ook hiermee kun je snel een zuur-base stoornis herkennen.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat de bufferlijn in het bloed niet perfect recht of perfect parallel loopt, omdat ook andere buffers meedoen, vooral hemoglobine.`}</Inline></p>
    </div>
  )
}
