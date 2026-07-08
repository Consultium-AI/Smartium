import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van endometriose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als endometriose is vastgesteld, kan behandeling medicamenteus of chirurgisch zijn.`}</Inline></p>
      <SubHeading><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De medicamenteuze behandeling is gericht op het onderbreken van de opbouw van het endometrium door de oestrogeenproductie uit het ovarium te verlagen. Mogelijke middelen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`OAC;`}</Inline></li>
        <li><Inline>{`lynesterol, een progestageen;`}</Inline></li>
        <li><Inline>{`aromataseremmer;`}</Inline></li>
        <li><Inline>{`GnRH-analoog.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Chirurgische behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Daarnaast kan gekozen worden voor chirurgische sanering van endometriosehaarden en adhesies, bijvoorbeeld via:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`laparoscopie;`}</Inline></li>
        <li><Inline>{`laparotomie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Belangrijk nadeel van medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk nadeel is dat deze behandeling haaks staat op een kinderwens of op de behandeling van kinderloosheid. Dat komt doordat de therapie juist de hormonale activiteit en daarmee de endometriumopbouw onderdrukt.`}</Inline></p>
    </div>
  )
}
