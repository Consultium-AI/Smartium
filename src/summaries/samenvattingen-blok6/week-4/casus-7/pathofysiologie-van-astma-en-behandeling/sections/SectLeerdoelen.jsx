import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze module kun je uitleggen wat astma is, hoe astma ontstaat, hoe je astma herkent en diagnosticeert, hoe je verschillende subgroepen van astma kunt onderscheiden en hoe de behandeling van astma is opgebouwd. Je kunt daarbij ook benoemen wat belangrijk is bij astma-exacerbaties, ernstig astma en de rol van triggers, educatie en monitoring.`}</Inline></p>
    </div>
  )
}
