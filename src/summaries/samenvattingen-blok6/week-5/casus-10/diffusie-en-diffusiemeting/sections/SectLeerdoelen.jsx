import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen hoe gaswisseling in de long verloopt, hoe diffusie wordt beschreven met de wet van Fick, waarom bij diffusietesten koolmonoxide wordt gebruikt, hoe de diffusiecapaciteit van de long wordt gemeten, welke patronen je ziet bij verschillende longpathologieën en welke factoren de DLCO-meting kunnen beïnvloeden.`}</Inline></p>
    </div>
  )
}
