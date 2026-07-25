import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloeddrukregulatie: snel en langzaam`}</Inline></SubHeading>
      <PBody text={`De bloeddruk wordt op twee manieren gereguleerd: **snel** via hersenen en zenuwen, en **langzaam** via de nieren. Als de bloeddruk daalt, proberen deze systemen de situatie te herstellen.`} />
      <PBody text={`In de hals en in de aortaboog zitten **drukgevoelige sensoren**. Bij een lage bloeddruk sturen deze sensoren een signaal naar de hersenen, via de **nucleus tractus solitarius** in de medulla oblongata. Daarna volgt activatie van het **sympathisch zenuwstelsel**. Dat heeft drie belangrijke effecten:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het hart gaat sneller pompen, waardoor de **hartfrequentie** stijgt;`}</Inline></li>
        <li><Inline>{`arteriën en venen trekken samen;`}</Inline></li>
        <li><Inline>{`de nieren gaan meer vocht vasthouden.`}</Inline></li>
      </ul>
      <PBody text={`Door **venoconstrictie** komt meer bloed terug naar het hart, waardoor de **veneuze return** stijgt. Daardoor neemt het **eind-diastolisch volume** toe en kan het hart meer uitpompen. Door **arterioloconstrictie** stijgt de **totale perifere weerstand**, en daarmee vooral de **diastolische bloeddruk**.`} />
      <p className="leading-relaxed"><Inline>{`Hier zit meteen een belangrijke balans in: als de vaten te sterk samenknijpen, kan de bloeddruk wel op peil blijven, maar komt er juist te weinig bloed bij de haarvaten aan. Dan is de druk dus niet het hele verhaal.`}</Inline></p>
    </div>
  )
}
