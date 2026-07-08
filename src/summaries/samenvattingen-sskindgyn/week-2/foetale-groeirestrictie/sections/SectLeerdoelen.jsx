import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof moet je begrijpen wat foetale groeirestrictie is, hoe je het onderscheid maakt met een klein kind zonder groeirestrictie, welke controles en onderzoeken zinvol zijn bij een vermoeden van groeiproblemen, en wanneer foetale bewaking of het eerder beëindigen van de zwangerschap aan de orde is.`}</Inline></p>
    </div>
  )
}
