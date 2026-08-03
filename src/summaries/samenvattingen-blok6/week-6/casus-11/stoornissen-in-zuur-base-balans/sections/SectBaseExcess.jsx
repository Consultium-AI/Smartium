import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Base excess`}</Inline></SubHeading>
      <PBody text={`Het **base excess** geeft aan hoeveel base er in het arteriële bloed aanwezig is ten opzichte van normaal.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**BE < 0**: er is extra zuur aanwezig → metabole acidose`}</Inline></li>
        <li><Inline>{`**BE > 0**: er is extra base aanwezig → metabole alkalose`}</Inline></li>
        <li><Inline>{`**BE = 0**: de afwijking zit vooral in CO₂ → zuiver respiratoir`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een negatieve base excess betekent dus dat er bicarbonaat verdwenen is of dat er zuurbelasting is. Een positieve waarde betekent dat er base is toegevoegd of dat er een base-overschot bestaat.`}</Inline></p>
    </div>
  )
}
