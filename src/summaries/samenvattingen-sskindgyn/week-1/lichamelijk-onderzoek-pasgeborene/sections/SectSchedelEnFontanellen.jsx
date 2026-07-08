import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Schedel en fontanellen`}</Inline></SubHeading>
      <PBody text={`Bij de schedel let je op de **vorm**, de **fontanellen** en de **schedelnaden**. De vorm kan bijvoorbeeld beïnvloed zijn door **moulage** of door **craniosynostose**. Moulage betekent dat de schedel door de bevalling tijdelijk wat vervormd kan zijn. Craniosynostose betekent dat schedelnaden te vroeg sluiten.`} />
      <PBody text={`De fontanellen beoordeel je op grootte en ligging. Normaal liggen ze **op niveau**. Een **bomberende fontanel** kan passen bij **verhoogde intracraniële druk**. Een **ingezonken fontanel** past bij **dehydratie**.`} />
      <SubHeading><Inline>{`Geboortetrauma van de schedel`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Twee begrippen zijn belangrijk om uit elkaar te houden:`}</Inline></p>
      <DataTable rows={[["Tabel 2. Cephaalhematoom versus caput succedaneum"], ["**Cephaalhematoom**", "Geboortetrauma, scherp begrensd, fluctuerend, berust op een **subperiostale bloeding**."], ["**Caput succedaneum**", "Onscherp begrensd passagier baringsgezwel, berust op **oedeem van het voorliggende deel**."]]} />
      <p className="leading-relaxed"><Inline>{`Het verschil zit dus vooral in de begrenzing en de oorzaak: een cephaalhematoom is een bloeding onder het periost, terwijl caput succedaneum vooral zwelling door oedeem is.`}</Inline></p>
    </div>
  )
}
