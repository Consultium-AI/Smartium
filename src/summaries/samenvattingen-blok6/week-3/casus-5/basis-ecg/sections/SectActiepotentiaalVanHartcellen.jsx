import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Actiepotentiaal van hartcellen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een hartcel doorloopt verschillende fasen in zijn actiepotentiaal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Fase 0**: snelle upstroke`}</Inline></li>
        <li><Inline>{`**Fase 1**: overshoot`}</Inline></li>
        <li><Inline>{`**Fase 2**: plateau`}</Inline></li>
        <li><Inline>{`**Fase 3**: terugkeer naar de basislijn`}</Inline></li>
        <li><Inline>{`**Fase 4**: rustfase`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In deze fasen spelen verschillende ionkanalen een rol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er is verschil tussen spiercellen en cellen van het geleidingssysteem. Spiercellen hebben een snelle activatie en een duidelijke plateaufase. Cellen van het geleidingssysteem hebben een langzamere upstroke en missen een duidelijke plateaufase. Bovendien hebben deze cellen spontane depolarisatie, waardoor ze in staat zijn het hartritme aan te maken. Het Purkinje-systeem lijkt in zijn actiepotentiaal meer op spiercellen, omdat het vooral bedoeld is voor snelle geleiding.`}</Inline></p>
    </div>
  )
}
