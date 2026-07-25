import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Arbeidshygiëne en preventie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De arbeidshygiënische strategie is bedoeld om belasting en risico’s te verminderen. De volgorde is belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bestrijding aan de bron;`}</Inline></li>
        <li><Inline>{`bron afschermen;`}</Inline></li>
        <li><Inline>{`mens afschermen;`}</Inline></li>
        <li><Inline>{`blootstelling beperken;`}</Inline></li>
        <li><Inline>{`schade beperken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij geluid kan dat bijvoorbeeld betekenen: apparatuur vervangen, de bron omkasten, de werkruimte isoleren of gehoorbescherming gebruiken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Werknemers worden beschermd door wetten zoals de Arbowet, de Arbeidstijdenwet en de Wet Arbeid en Zorg. De werkgever is primair verantwoordelijk voor een veilige en gezonde werkplek.`}</Inline></p>
    </div>
  )
}
