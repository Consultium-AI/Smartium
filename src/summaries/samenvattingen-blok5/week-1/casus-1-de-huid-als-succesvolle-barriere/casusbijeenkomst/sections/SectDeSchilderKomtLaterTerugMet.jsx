import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De schilder komt later terug met:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`erythemateuze, scherp begrensde plekken op de handen;`}</Inline></li>
        <li><Inline>{`jeuk;`}</Inline></li>
        <li><Inline>{`fissuren;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`soms nattende laesies.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast hebben meerdere collega’s vergelijkbare klachten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit patroon past het best bij irritatief contacteczeem. De combinatie van beroepsmatige blootstelling, huidirritatie en klachten aan de handen maakt dit waarschijnlijk. Dat collega’s ook klachten hebben, past bij een gedeelde blootstelling aan irriterende omstandigheden op het werk.`}</Inline></p>
    </div>
  )
}
