import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het multidisciplinair overleg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een resectabel oesophaguscarcinoom moet altijd multidisciplinair besproken worden. In het MDO wordt het optimale behandelplan opgesteld. Het team bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`MDL-arts;`}</Inline></li>
        <li><Inline>{`radiotherapeut;`}</Inline></li>
        <li><Inline>{`radioloog;`}</Inline></li>
        <li><Inline>{`internist-oncoloog;`}</Inline></li>
        <li><Inline>{`nucleair geneeskundige;`}</Inline></li>
        <li><Inline>{`chirurg;`}</Inline></li>
        <li><Inline>{`verpleegkundig specialist;`}</Inline></li>
        <li><Inline>{`diëtist.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat voor het merendeel van de patiënten uit een oesophaguscardiaresectie. Dat is een grote operatie en vormt op dit moment de hoeksteen van de behandeling. Soms wordt gekozen voor definitieve chemoradiotherapie, bijvoorbeeld als de patiënt geen operatie aankan of deze niet wil. Ook bij zeer proximaal gelegen tumoren wordt vaak voor definitieve chemoradiotherapie gekozen, omdat een operatie dan extreem uitgebreid en mutilerend zou zijn.`}</Inline></p>
    </div>
  )
}
