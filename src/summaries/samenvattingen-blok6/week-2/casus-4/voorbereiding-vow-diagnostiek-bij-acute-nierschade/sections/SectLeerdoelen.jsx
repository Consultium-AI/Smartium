import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de belangrijkste indicaties voor een nier-echo benoemen;`}</Inline></li>
        <li><Inline>{`uitleggen wat de beperkingen en contra-indicaties van echografie in de nefrologie zijn;`}</Inline></li>
        <li><Inline>{`de plaats van echografie binnen het diagnostisch traject van nierziekten beschrijven;`}</Inline></li>
        <li><Inline>{`reflecteren op wanneer je als arts wel of juist niet voor echografie kiest.`}</Inline></li>
      </ul>
    </div>
  )
}
