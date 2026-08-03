import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt MRI?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De basis is als volgt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De patiënt ligt in een sterk magneetveld.`}</Inline></li>
        <li><Inline>{`Waterstofkernen in het lichaam hebben spin en richten zich uit in de richting van dat magneetveld.`}</Inline></li>
        <li><Inline>{`Radiogolven verstoren die uitlijning.`}</Inline></li>
        <li><Inline>{`Als de radiogolven stoppen, richten de spins zich weer uit en geven daarbij energie af.`}</Inline></li>
        <li><Inline>{`Die energie wordt opgevangen door spoelen.`}</Inline></li>
        <li><Inline>{`Met software wordt daarvan een afbeelding gemaakt.`}</Inline></li>
      </ul>
      <PBody text={`Bij MRI spreek je daarom over **hoog signaal** en **laag signaal** in plaats van wit en zwart.`} />
    </div>
  )
}
