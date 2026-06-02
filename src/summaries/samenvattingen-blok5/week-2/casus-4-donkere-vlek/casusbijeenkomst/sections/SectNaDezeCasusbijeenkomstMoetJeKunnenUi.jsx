import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Na deze casusbijeenkomst moet je kunnen uitleggen:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`waarom bij een jonge vrouw met een borstafwijking en familiale belasting verder onderzoek nodig is;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`welke beeldvorming passend is bij verdenking op borstkanker en wat de beperkingen van een mammogram zijn bij dicht borstweefsel;`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`waarom histologisch weefselonderzoek de voorkeur heeft boven cytologie;`}</Inline></li>
        <li><Inline>{`wat de betekenis is van de biomarkers ER, PR en HER2;`}</Inline></li>
        <li><Inline>{`hoe HER2 past binnen de hallmarks of cancer;`}</Inline></li>
        <li><Inline>{`hoe de behandeling van gelokaliseerd mammacarcinoom in grote lijnen is opgebouwd;`}</Inline></li>
        <li><Inline>{`welke rol chirurgie, systeemtherapie en radiotherapie hebben;`}</Inline></li>
        <li><Inline>{`waarom curatieve behandeling bij deze casus centraal staat;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`welke factoren belangrijk zijn bij bestralingsplanning.`}</Inline></p>
    </div>
  )
}
