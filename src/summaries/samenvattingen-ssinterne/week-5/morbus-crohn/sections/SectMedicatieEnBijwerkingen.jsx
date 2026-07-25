import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Medicatie en bijwerkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Corticosteroïden kunnen bijwerkingen geven zoals gewichtstoename, vocht vasthouden en emotionele labiliteit. Ook osteoporose kan optreden bij corticosteroïdgebruik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Azathioprine is een onderhoudsmiddel, maar geeft ook aandachtspunten. Een bekende bijwerking is een verhoogd risico op het ontwikkelen van een lymfoom.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij onvoldoende effect of bij een ernstiger beloop kunnen biologics worden ingezet, zoals anti-TNF-middelen. In de casus werd infliximab gebruikt. Vooraf is screening op tuberculose en bepaalde virussen nodig. Daarna volgt een opstartschema en vervolgens onderhoudsbehandeling via het infuus om de 8 weken.`}</Inline></p>
    </div>
  )
}
