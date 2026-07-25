import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Complicaties en aanvullende diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Reuscelarteritis kan ook grote-vatenbetrokkenheid geven, bijvoorbeeld aneurysmata van de aorta. Daarom moet je bij klachten zoals claudicatio van de extremiteiten, aanhoudende systemische klachten of blijvend verhoogde ontstekingswaarden ondanks behandeling denken aan uitbreiding naar grote vaten. Dan is aanvullende beeldvorming, bijvoorbeeld PET/CT, aangewezen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Langetermijncomplicaties zijn belangrijk. Patiënten met reuscelarteritis hebben een sterk verhoogd risico op thoracale aneurysmata en ook een verhoogd risico op abdominale aneurysmata. Daarom wordt in de follow-up regelmatig, ongeveer eens per 2 jaar, een X-thorax gemaakt ter evaluatie.`}</Inline></p>
    </div>
  )
}
