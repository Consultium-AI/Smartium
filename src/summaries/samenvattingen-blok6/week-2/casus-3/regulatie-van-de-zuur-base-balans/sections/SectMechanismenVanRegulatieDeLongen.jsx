import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mechanismen van regulatie: de longen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen reguleren de pH door CO2 uit te scheiden. Als de CO2-concentratie stijgt, daalt de pH en ontstaat acidose. Als de CO2-concentratie daalt, stijgt de pH en ontstaat alkalose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De longen kunnen alleen een rol spelen bij stoffen die tot CO2 gemetaboliseerd kunnen worden. Stoffen die een zuurrest achterlaten, zoals lactaat of fosfaten, moeten via de nieren worden uitgescheiden.`}</Inline></p>
    </div>
  )
}
