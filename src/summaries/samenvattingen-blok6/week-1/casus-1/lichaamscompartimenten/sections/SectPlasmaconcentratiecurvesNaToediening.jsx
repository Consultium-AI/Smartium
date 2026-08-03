import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Plasmaconcentratiecurves na toediening`}</Inline></SubHeading>
      <PBody text={`De concentratie van een geneesmiddel in het plasma verandert in de tijd. Dat kun je zien als een **plasmaconcentratiecurve**. Die curve ziet er anders uit afhankelijk van de toedieningsweg.`} />
    </div>
  )
}
