import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Actiepotentiaal en elektrische eigenschappen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een enkele hartcel heeft een actiepotentiaal met verschillende fasen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Fase 0**: snelle upstroke`}</Inline></li>
        <li><Inline>{`**Fase 1**: overshoot`}</Inline></li>
        <li><Inline>{`**Fase 2**: plateau`}</Inline></li>
        <li><Inline>{`**Fase 3**: terugkeer naar de basislijn`}</Inline></li>
        <li><Inline>{`**Fase 4**: rustfase`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De cellen van het geleidingssysteem hebben andere elektrische eigenschappen dan gewone spiercellen. Ze hebben een zekere spontane depolarisatie en kunnen daardoor het hartritme aanmaken. Het Purkinje-systeem lijkt qua actiepotentiaal meer op spiercellen, omdat het vooral bedoeld is voor snelle geleiding door de ventrikels.`}</Inline></p>
      <PBody text={`Hartspiercellen zijn met elkaar verbonden via **intercalated discs** en **gap junctions**. Daardoor werkt het hart als één elektrisch geheel. Als één cel depolariseert, verspreidt die prikkel zich als een olievlek over de rest van het myocard.`} />
    </div>
  )
}
