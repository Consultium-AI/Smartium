import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je uitleggen hoe de renale bloeddoorstroming en de glomerulaire filtratiesnelheid (GFR) worden gereguleerd. Ook kun je beschrijven welke fysiologische processen hierbij betrokken zijn en hoe die processen ervoor zorgen dat de GFR zo stabiel mogelijk blijft.`}</Inline></p>
    </div>
  )
}
