import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eclamptisch insult`}</Inline></SubHeading>
      <PBody text={`Bij een zwangere met **pre-eclampsie** kunnen plots **tonisch-clonische insulten** optreden: dit heet eclampsie. Vaak gaan hier klachten aan vooraf zoals hoofdpijn of visusstoornissen. Tijdens en na het insult is de luchtweg bedreigd, bijvoorbeeld door tongbeet of verslapping van de tongbasis.`} />
      <PBody text={`De bloeddruk is vaak zeer hoog, bijvoorbeeld boven **160/110 mmHg**. Daardoor is er risico op orgaanschade, hersenbloeding of infarct. Ook de placentaire circulatie kan verminderen, waardoor de foetus in nood kan komen.`} />
      <p className="leading-relaxed"><Inline>{`De opvang bestaat in grote lijnen uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Magnesiumsulfaat** geven ter preventie van nieuwe insulten en voor cerebrale protectie.`}</Inline></li>
        <li><Inline>{`**Bloeddruk controleren en behandelen**.`}</Inline></li>
        <li><Inline>{`De zwangerschap beëindigen wanneer de maternale conditie dat toelaat.`}</Inline></li>
      </ul>
      <PBody text={`De patiënte laat je niet alleen, je legt haar in stabiele zijligging, geeft zuurstof, roept hulp in en beoordeelt A-B-C. Daarna geef je zo nodig een oplaaddosis magnesiumsulfaat en vervolgens onderhoud. Je let goed op urineproductie, ademhalingsfrequentie, saturatie en kniepeesreflexen. Bij te weinig urine, afwezige reflexen, lage ademhalingsfrequentie of lage saturatie moet magnesium worden gestopt. Het antidotum is **calciumgluconaat**. Bij onvoldoende effect kan diazepam of sedatie met intubatie nodig zijn.`} />
    </div>
  )
}
