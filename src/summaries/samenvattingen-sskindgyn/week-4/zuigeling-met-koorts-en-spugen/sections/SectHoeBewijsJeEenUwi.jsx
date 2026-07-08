import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe bewijs je een UWI?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een urineweginfectie wordt bevestigd met een betrouwbaar afgenomen urinekweek. Dat kan bijvoorbeeld via catheterafname, blaaspunctie of een plaszak. In een niet-acute situatie wordt idealiter de clean-catchmethode gebruikt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De definitie van een UWI is een combinatie van klinische, leeftijdsgebonden kenmerken en de aanwezigheid van bacteriën in een betrouwbaar afgenomen urinekweek. De combinatie van leukocyten en nitriet in de urine is ondersteunend, maar de kweek blijft nodig.`}</Inline></p>
    </div>
  )
}
