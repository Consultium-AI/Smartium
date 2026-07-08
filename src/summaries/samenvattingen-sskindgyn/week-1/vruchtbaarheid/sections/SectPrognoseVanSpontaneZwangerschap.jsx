import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose van spontane zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kans op spontane zwangerschap wordt bepaald door meerdere factoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd van de vrouw;`}</Inline></li>
        <li><Inline>{`duur van de vruchtbaarheidsstoornis;`}</Inline></li>
        <li><Inline>{`primaire of secundaire subfertiliteit;`}</Inline></li>
        <li><Inline>{`verwijzing door huisarts of gynaecoloog;`}</Inline></li>
        <li><Inline>{`semenkwaliteit;`}</Inline></li>
        <li><Inline>{`aanwezigheid van tubapathologie;`}</Inline></li>
        <li><Inline>{`samenlevingstest.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De leeftijd van de vrouw is een belangrijke factor. Tot 31 jaar neemt de kans op spontane zwangerschap met 3% af, en na het 31e levensjaar met 8%. Ook de duur van de vruchtbaarheidsstoornis telt mee: per jaar neemt de kans ongeveer 17% af.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De semenkwaliteit beïnvloedt de prognose ook. Bij een lagere concentratie, lagere motiliteit of minder normaal gevormde zaadcellen daalt de kans op zwangerschap. Tubapathologie verlaagt de kans eveneens. De samenlevingstest heeft geen bewezen diagnostische waarde, maar wel prognostische waarde; een afwijkende test betekent een 2- tot 3-voudig lagere kans op zwangerschap.`}</Inline></p>
      <PBody text={`Voor Suzanne en Jaap wordt met de gegeven gegevens een spontane zwangerschapskans van **29,9%** berekend voor het komende jaar.`} />
    </div>
  )
}
