import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`foetale bewaking in de dagelijkse praktijk uitvoeren;`}</Inline></li>
        <li><Inline>{`een cardio-tocogram (CTG) interpreteren;`}</Inline></li>
        <li><Inline>{`beleid bepalen op basis van de uitkomsten van het CTG.`}</Inline></li>
      </ul>
    </div>
  )
}
