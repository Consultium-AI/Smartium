import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niet-homeostatisch gereguleerde variabelen`}</Inline></SubHeading>
      <PBody text={`Naast homeostatische variabelen zijn er ook veel variabelen die **niet zelf stabiel gehouden worden**. Deze variabelen zijn dus niet het einddoel van regulatie, maar helpen juist om de homeostatische variabelen stabiel te houden.`} />
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hartminuutvolume`}</Inline></li>
        <li><Inline>{`perifere weerstand`}</Inline></li>
      </ul>
      <PBody text={`Samen bepalen deze twee de **gemiddelde arteriële bloeddruk**, en die bloeddruk is juist wél een homeostatisch gereguleerde variabele.`} />
      <p className="leading-relaxed"><Inline>{`Dus: niet-homeostatische variabelen zijn niet onbelangrijk. Integendeel, het lichaam gebruikt ze vaak om een homeostatische variabele te beïnvloeden.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** als de bloeddruk daalt, wat gebeurt er dan vaak met hartminuutvolume en perifere weerstand?
**Mini-antwoord:** die nemen toe, zodat de bloeddruk weer stijgt.`} />
    </div>
  )
}
