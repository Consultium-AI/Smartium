import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van GPA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hoeksteen van de behandeling is immuunsuppressie. De keuze hangt af van de ernst en uitgebreidheid van de ziekte.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij gelimiteerde GPA van het KNO-gebied is de volgorde:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`co-trimoxazol;`}</Inline></li>
        <li><Inline>{`prednison;`}</Inline></li>
        <li><Inline>{`azathioprine of methotrexaat;`}</Inline></li>
        <li><Inline>{`rituximab of Endoxan.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ernstige orgaanbetrokkenheid, bijvoorbeeld nierfunctiestoornissen, start je met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`prednison;`}</Inline></li>
        <li><Inline>{`rituximab of Endoxan;`}</Inline></li>
        <li><Inline>{`daarna azathioprine of methotrexaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Endoxan heeft belangrijke bijwerkingen die je altijd moet bespreken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`infertiliteit;`}</Inline></li>
        <li><Inline>{`hemorrhagische cystitis;`}</Inline></li>
        <li><Inline>{`blaaskanker.`}</Inline></li>
      </ul>
    </div>
  )
}
