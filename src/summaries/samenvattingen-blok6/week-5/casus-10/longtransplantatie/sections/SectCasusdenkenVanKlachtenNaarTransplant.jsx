import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casusdenken: van klachten naar transplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met hoesten en kortademigheid kan uiteindelijk in het traject van longtransplantatie terechtkomen, maar dat gebeurt niet meteen. Eerst moet duidelijk zijn welke longziekte er precies speelt. Bij verdenking op longfibrose is aanvullend onderzoek nodig, zoals CT-thorax, eventueel bloedonderzoek en soms een longbiopt. Bespreking in een multidisciplinair overleg is belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de diagnose idiopathische pulmonale fibrose wordt gesteld, is er wel behandeling mogelijk met fibrose-remmers, maar geen genezende therapie. Juist daarom is dit een reden om de patiënt te verwijzen voor beoordeling in een transplantatiecentrum.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat een indicatie nog niet betekent dat iemand direct getransplanteerd wordt. Eerst volgt screening. Alleen als die screening geen contra-indicaties laat zien en er voldoende overlevingswinst verwacht wordt, komt iemand op de wachtlijst.`}</Inline></p>
    </div>
  )
}
