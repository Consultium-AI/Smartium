import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Er wordt ook een ontwikkeling beschreven van oudere naar nieuwere biologicals:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`eerst anti-TNF`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`daarna IL-12/23-remming`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`daarna IL-17-remming`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`daarna IL-23-remming`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De lijn is steeds: **specifieker en effectiever**.`}</Inline></p>
    </div>
  )
}
