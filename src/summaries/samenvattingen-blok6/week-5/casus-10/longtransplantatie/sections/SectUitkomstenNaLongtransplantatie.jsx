import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitkomsten na longtransplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na transplantatie heeft zowel de donorlong als de patiënt tijd nodig om te herstellen. Het leren omgaan met de nieuwe longen, het innemen van medicatie, trainen van spierkracht en conditie en het aanpassen aan nieuwe leefregels horen allemaal bij het traject.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Gemiddeld zijn patiënten na ongeveer een jaar qua energie en activiteit vergelijkbaar met gezonde volwassenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De longfunctie neemt in de eerste weken tot maanden vaak snel toe. Dat geeft veel winst in het dagelijks functioneren.`}</Inline></p>
    </div>
  )
}
