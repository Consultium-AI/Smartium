import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom komt cyanose voor bij aangeboren hartafwijkingen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aangeboren hartafwijkingen komen relatief vaak voor. Ze worden grofweg verdeeld in drie groepen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hartafwijkingen met links-rechts shunt, zoals ASD en VSD;`}</Inline></li>
        <li><Inline>{`hartafwijkingen met rechts-links shunt, de cyanotische hartafwijkingen;`}</Inline></li>
        <li><Inline>{`obstructieve hartafwijkingen, zoals aortastenose of pulmonaalstenose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij cyanotische hartafwijkingen komt zuurstofarm bloed in de systemische circulatie terecht. Dat gebeurt vooral op twee manieren: ofwel er stroomt te weinig bloed naar de longen, ofwel de verbindingen tussen de hartkamers en grote vaten zijn afwijkend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke cyanotische hartafwijkingen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Tetralogie van Fallot;`}</Inline></li>
        <li><Inline>{`Tricuspidalisatresie;`}</Inline></li>
        <li><Inline>{`Transpositie van de grote arteriën.`}</Inline></li>
      </ul>
    </div>
  )
}
