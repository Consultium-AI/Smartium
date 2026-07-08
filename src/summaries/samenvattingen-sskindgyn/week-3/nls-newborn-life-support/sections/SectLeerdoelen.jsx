import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je de stappen van het NLS-algoritme uitvoeren bij de opvang en reanimatie van de pasgeborene. Daarbij hoort dat je weet hoe je een pasgeborene goed voorbereidt, hoe je de luchtweg opent, wanneer en hoe je beademt, wanneer thoraxcompressies nodig zijn en welke medicatie en nazorg een rol kunnen spelen.`}</Inline></p>
    </div>
  )
}
