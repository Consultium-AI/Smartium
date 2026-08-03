import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De nier als filter- en transportsysteem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier heeft een centrale rol in het bewaren van de homeostase. Dat betekent dat de samenstelling van het bloed zo constant mogelijk wordt gehouden. De nier doet dat op twee grote manieren: eerst door filtratie in de glomerulus en daarna door transport in de tubulus. In de glomerulus wordt bloed gefiltreerd, terwijl in de tubulus stoffen weer worden teruggenomen of juist uitgescheiden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk uitgangspunt is dat de nier wel water en zouten wil doorlaten, maar juist eiwitten en andere grote stoffen zoveel mogelijk wil tegenhouden. Dat gebeurt via een speciale filtratiebarrière in de glomerulus.`}</Inline></p>
    </div>
  )
}
