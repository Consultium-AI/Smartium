import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Thermoregulatie als voorbeeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een daling van de buitentemperatuur daalt ook de lichaamstemperatuur. Dat is de stimulus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De temperatuur wordt waargenomen door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`thermoreceptoren in de huid`}</Inline></li>
        <li><Inline>{`centrale thermoreceptoren in het lichaam`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Samen vormen zij de sensor. De sensore neuronen sturen actiepotentialen naar de hypothalamus. De hypothalamus is de integrator en vergelijkt de gemeten temperatuur met het setpoint voor lichaamstemperatuur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de temperatuur te laag is, stuurt de hypothalamus via motorneuronen signalen naar de effectoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zweetklieren gaan minder zweet produceren`}</Inline></li>
        <li><Inline>{`bloedvaatjes in de huid trekken samen`}</Inline></li>
        <li><Inline>{`skeletspieren gaan rillen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor verliest het lichaam minder warmte en maakt het juist extra warmte. De lichaamstemperatuur stijgt weer. Dat is de response en tegelijk de negatieve feedback.`}</Inline></p>
      <SubHeading><Inline>{`Effectoren bij thermoregulatie`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Effectoren en hun effect bij lage lichaamstemperatuur"], ["Zweetklieren", "minder zweetproductie"], ["Bloedvaatjes in de huid", "samentrekken, minder warmteverlies"], ["Skeletspieren", "rillen, warmteproductie"]]} />
    </div>
  )
}
