import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bevestiging van de diagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als huisarts kun je de diagnose bevestigen met spirometrie. Daarbij kijk je of er sprake is van obstructie en of deze reversibel is. Bij astma hoort de luchtwegobstructie in principe reversibel te zijn.`}</Inline></p>
    </div>
  )
}
