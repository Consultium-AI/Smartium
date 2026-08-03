import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen wat hypersensitivity pneumonitis (HP) is en dat het ook extrinsieke allergische alveolitis (EAA) wordt genoemd;`}</Inline></li>
        <li><Inline>{`benoemen welke factoren een rol spelen bij het ontstaan van HP;`}</Inline></li>
        <li><Inline>{`specifieke blootstellingen noemen die HP kunnen veroorzaken;`}</Inline></li>
        <li><Inline>{`beschrijven welke anamnese, onderzoeken en bevindingen helpen om de diagnose HP te stellen.`}</Inline></li>
      </ul>
    </div>
  )
}
