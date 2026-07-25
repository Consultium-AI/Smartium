import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen wat een **poliep**, **adenoom**, **serrated poliep** en **advanced adenoom** zijn;`}</Inline></li>
        <li><Inline>{`een **interval voor surveillancecoloscopie** bepalen;`}</Inline></li>
        <li><Inline>{`uitleggen **waarom** in Nederland is gestart met een bevolkingsonderzoek naar darmkanker;`}</Inline></li>
        <li><Inline>{`uitleggen **hoe** het bevolkingsonderzoek darmkanker verloopt.`}</Inline></li>
      </ul>
    </div>
  )
}
