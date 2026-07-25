import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is thiamine?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Thiamine is belangrijk voor enzymatische processen in de energiehuishouding en zenuwgeleiding. Het komt voor in vlees, gevogelte, granen, noten en melk. Overmatig alcoholgebruik verstoort de thiaminestatus op meerdere manieren: opname neemt af, uitscheiding neemt toe, activatie wordt geremd en de inname is vaak ook laag door slechte voeding.`}</Inline></p>
    </div>
  )
}
