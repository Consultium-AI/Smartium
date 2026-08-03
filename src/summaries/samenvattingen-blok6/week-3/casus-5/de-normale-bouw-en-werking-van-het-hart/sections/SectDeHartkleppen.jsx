import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De hartkleppen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn vier hartkleppen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**tricuspidalisklep** tussen rechterboezem en rechterkamer`}</Inline></li>
        <li><Inline>{`**mitralisklep** tussen linkerboezem en linkerkamer`}</Inline></li>
        <li><Inline>{`**pulmonalisklep** tussen rechterkamer en longslagader`}</Inline></li>
        <li><Inline>{`**aortaklep** tussen linkerkamer en aorta`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De kleppen openen en sluiten passief door drukverschillen. Ze zorgen ervoor dat het bloed maar één kant op stroomt.`}</Inline></p>
      <PBody text={`De AV-kleppen worden ondersteund door **chordae tendineae** en **papillairspieren**. Die voorkomen dat de kleppen tijdens systole doorslaan naar de boezems.`} />
    </div>
  )
}
