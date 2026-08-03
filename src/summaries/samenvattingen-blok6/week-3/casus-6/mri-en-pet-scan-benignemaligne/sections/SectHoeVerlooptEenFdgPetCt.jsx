import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe verloopt een FDG PET/CT?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na toediening van FDG wacht de patiënt ongeveer 60 minuten in een warme wachtkamer en beweegt zo weinig mogelijk. Daarna volgt de scan. Eerst wordt meestal een lage-dosis CT gemaakt voor anatomische correlatie en attenuatiecorrectie, daarna de PET-opname. Soms volgt nog een diagnostische CT met of zonder contrast.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het gebruikelijke scanbereik loopt van schedelbasis tot liezen, maar afhankelijk van de vraagstelling kan ook het hele lichaam worden afgebeeld. Omdat de scanner maar een beperkte lengte heeft, worden meerdere bedposities gebruikt met overlap.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Fysiologische FDG-opname zie je normaal in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hersenen;`}</Inline></li>
        <li><Inline>{`ring van Waldeyer;`}</Inline></li>
        <li><Inline>{`myocard, variabel;`}</Inline></li>
        <li><Inline>{`lever;`}</Inline></li>
        <li><Inline>{`milt;`}</Inline></li>
        <li><Inline>{`nieren;`}</Inline></li>
        <li><Inline>{`darmen, variabel;`}</Inline></li>
        <li><Inline>{`urinewegen en blaas.`}</Inline></li>
      </ul>
    </div>
  )
}
