import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 6: QRS-morfologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het QRS-complex staat voor de activatie van de ventrikels en is meestal het grootste deel van het ECG. Daarom zie je hier vaak de meeste afwijkingen.`}</Inline></p>
      <SubHeading><Inline>{`Naamgeving van het QRS-complex`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Q** = eerste negatieve uitslag zonder voorafgaande positieve uitslag`}</Inline></li>
        <li><Inline>{`**R** = eerste positieve uitslag`}</Inline></li>
        <li><Inline>{`**S** = eerste negatieve uitslag na een positieve uitslag`}</Inline></li>
        <li><Inline>{`**R’** = tweede positieve uitslag`}</Inline></li>
      </ul>
      <PBody text={`Een complex met alleen negatieve uitslag heet een **QS-complex**. De dominante uitslag krijgt een hoofdletter, de kleinere een kleine letter.`} />
      <SubHeading><Inline>{`Pathologische Q-golven`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een pathologische Q-golf kan wijzen op een doorgemaakt infarct in het bijbehorende gebied. Er zijn specifieke criteria, bijvoorbeeld in V2-V3 of in aangrenzende afleidingen zoals II, III en aVF. Let wel: Q-golven zijn niet volledig specifiek; ook andere oorzaken kunnen een negatieve uitslag geven.`}</Inline></p>
      <SubHeading><Inline>{`Ventrikelhypertrofie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hypertrofie is de spiermassa van een kamer toegenomen, waardoor de QRS-uitslagen groter worden.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Linkerventrikelhypertrofie**: vaak beoordeeld met het Sokolow-Lyon criterium. De R in V5 of V6 plus de S in V1 moet meer dan 35 mm zijn.`}</Inline></li>
        <li><Inline>{`**Rechterventrikelhypertrofie**: de hartas draait naar rechts en in V1 wordt de R-top groter, vaak met een R/S-verhouding > 1.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Microvoltages`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Microvoltages zijn aanwezig als de QRS-uitslagen klein zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`in de extremiteitsafleidingen niet meer dan 1 groot hokje`}</Inline></li>
        <li><Inline>{`in de borstwandafleidingen niet meer dan 2 grote hokjes`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit kan komen door weinig spiermassa of door een barrière tussen hart en huid, zoals lucht, vocht of vet.`}</Inline></p>
      <SubHeading><Inline>{`Geleidingsproblemen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een normale QRS-duur ligt tussen 80 en 120 ms. Vanaf 100 ms kan al sprake zijn van vertraging.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Linkerbundeltakblok**: activatie van de linkerkamer verloopt vertraagd via de rechterbundel. In V1 zie je vaak een diepe QS, in V6 een breed positief complex met een haking.`}</Inline></li>
        <li><Inline>{`**Rechterbundeltakblok**: activatie van de rechterkamer verloopt vertraagd. In V1 zie je vaak een RsR’-patroon, in V6 een overwegend negatief complex.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De linkerbundel splitst ook nog in fascikels. Een linkeranterieur hemiblok geeft een linkeras, een linkerposterieur hemiblok een rechteras.`}</Inline></p>
      <SubHeading><Inline>{`R-top progressie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De R-top progressie beschrijft hoe de QRS-complexen in de borstwandafleidingen veranderen van V1 naar V6. Normaal wordt de R-top groter en de S-top kleiner, totdat R groter wordt dan S in V3 of V4.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Snelle R-top progressie**: kan passen bij rechterventrikelhypertrofie of een doorgemaakt achterwandinfarct.`}</Inline></li>
        <li><Inline>{`**Trage R-top progressie**: kan passen bij een doorgemaakt anteroseptaal infarct, linkerventrikelhypertrofie, cardiomyopathie of een linker anterior hemiblok.`}</Inline></li>
      </ul>
    </div>
  )
}
