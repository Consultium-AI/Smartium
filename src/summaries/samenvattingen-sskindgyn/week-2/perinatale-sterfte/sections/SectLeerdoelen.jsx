import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je uitleg geven over de organisatie van de perinatale zorg in Nederland, met als doel de perinatale sterfte verder te verlagen. Je kunt ook maatregelen benoemen die de perinatale sterfte beïnvloeden en verminderen.`}</Inline></p>
    </div>
  )
}
