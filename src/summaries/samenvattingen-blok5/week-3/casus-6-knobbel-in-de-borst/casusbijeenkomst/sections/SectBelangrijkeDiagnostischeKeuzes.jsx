import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Bij beenzwelling is de diagnostiek altijd gericht op de meest waarschijnlijke oorzaak.`}</Inline>
      </p>
      <SubHeading><Inline>{`Wanneer denk je aan echo of duplex?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij verdenking op **DVT**;`}</Inline></li>
        <li><Inline>{`bij verdenking op **varices** of veneuze insufficiëntie;`}</Inline></li>
        <li><Inline>{`bij verdenking op **posttrombotische resten**;`}</Inline></li>
        <li><Inline>{`bij onduidelijke zwelling van het been.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wanneer denk je aan ECG en NT-proBNP?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij verdenking op **hartfalen**;`}</Inline></li>
        <li><Inline>{`vooral als er ook dyspneu, orthopneu of cardiale voorgeschiedenis is.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wanneer denk je aan verwijzing?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij vermoeden van **hartfalen**: cardioloog;`}</Inline></li>
        <li><Inline>{`bij vermoeden van **maligniteit**: gynaecoloog of andere specialist;`}</Inline></li>
        <li><Inline>{`bij ernstige varices of veneuze problematiek: verdere beoordeling en behandeling;`}</Inline></li>
        <li><Inline>{`bij mogelijk **compartimentsyndroom**: spoed.`}</Inline></li>
      </ul>
    </div>
  )
}
