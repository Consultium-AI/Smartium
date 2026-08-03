import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is astma?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma is een heterogene ziekte op basis van een chronische luchtwegontsteking. Dat betekent dat astma niet bij iedereen precies hetzelfde verloopt of door precies dezelfde onderliggende processen wordt veroorzaakt. De klachten bestaan vooral uit piepen, hoesten en kortademigheid. Kenmerkend is dat deze klachten in de tijd kunnen wisselen en in ernst kunnen variëren. Daarbij is er sprake van een variabele luchtwegobstructie: de luchtwegen zijn niet altijd even vernauwd, maar kunnen op verschillende momenten meer of minder afgesloten zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Astma is dus geen ziektebeeld met één vaste oorzaak of één vast patroon. Het is juist een verzamelnaam voor een aantal onderliggende processen die uiteindelijk tot vergelijkbare klachten leiden.`}</Inline></p>
    </div>
  )
}
