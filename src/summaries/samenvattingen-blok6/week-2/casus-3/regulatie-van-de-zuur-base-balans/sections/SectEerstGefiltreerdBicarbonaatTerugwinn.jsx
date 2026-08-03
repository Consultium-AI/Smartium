import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerst: gefiltreerd bicarbonaat terugwinnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bicarbonaat wordt vrij gefiltreerd door de glomerulus. Omdat de bicarbonaatconcentratie in het bloed ongeveer 24 mmol/L is en de GFR ongeveer 180 L/dag, wordt er per dag enorm veel bicarbonaat gefiltreerd. Dat moet eerst allemaal worden teruggeresorbeerd, anders zou het lichaam snel verzuren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de proximale tubulus gebeurt dit via de Na+/H+-uitwisselaar. Hierbij wordt Na+ de cel in gebracht en H+ naar het tubuluslumen uitgescheiden. Dat H+ reageert daar met gefiltreerd HCO3- tot water en CO2. Dankzij koolzuuranhydrase verloopt deze reactie snel. CO2 kan de cel weer in, waarna in de cel opnieuw HCO3- wordt gevormd. Dat bicarbonaat gaat terug naar het bloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat dit in de proximale tubulus netto geen zuur uitscheiding oplevert. Het H+ dat wordt uitgescheiden, wordt namelijk vooral gebruikt in een recyclingmechanisme om bicarbonaat terug te winnen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is er in de proximale tubulus geen netto zuur uitscheiding?`} />
      <p className="leading-relaxed"><Inline>{`Omdat het uitgescheiden H+ vooral reageert met gefiltreerd bicarbonaat en daarna weer wordt gerecycled; het verdwijnt dus niet echt uit het lichaam.`}</Inline></p>
    </div>
  )
}
