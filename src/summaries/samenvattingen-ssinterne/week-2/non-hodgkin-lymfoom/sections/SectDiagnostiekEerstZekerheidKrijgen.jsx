import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek: eerst zekerheid krijgen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor de diagnose non-Hodgkin lymfoom is altijd weefsel nodig. Alleen op basis van klachten, bloedonderzoek of beeldvorming kun je de diagnose nog niet stellen. Er moet dus een biopt van een lymfeklier worden genomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij voorkeur gebeurt dit met een excisiebiopt, waarbij de hele lymfeklier wordt verwijderd. Als dat niet mogelijk is, kan een dikke-naaldbiopt worden gedaan. Een cytologische punctie is hiervoor niet voldoende. Bij een diffuus grootcellig B-cel lymfoom kan een dikke-naaldbiopt soms wel genoeg zijn om de diagnose te bevestigen, maar niet altijd om de exacte subtypeclassificatie te bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De patholoog beoordeelt het histologische beeld en gebruikt aanvullende immunohistochemie om het type lymfoom vast te stellen.`}</Inline></p>
    </div>
  )
}
