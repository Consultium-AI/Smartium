import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je de fysiologie van de normale baring herkennen en een fysiologische baring begeleiden. Daarbij hoort dat je de verschillende fasen van de baring kent, de voortgang kunt beoordelen en weet welke handelingen passen bij een normale bevalling.`}</Inline></p>
    </div>
  )
}
