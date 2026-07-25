import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na het doornemen van deze stof weet je wat een **renogram** is, wat de belangrijkste **indicaties** zijn en hoe je dit onderzoek globaal beoordeelt. Ook weet je wat een **FDG PET/CT** is, wanneer je dit onderzoek inzet en hoe je de beelden interpreteert.`} />
    </div>
  )
}
