import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van de pasgeborene`}</Inline></SubHeading>
      <PBody text={`Na de geboorte wordt de conditie van een kind snel ingeschat met de **Apgar-score**. Deze score bestaat uit vijf onderdelen:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Appearance**: kleur`}</Inline></li>
        <li><Inline>{`**Pulse**: hartfrequentie`}</Inline></li>
        <li><Inline>{`**Grimace**: reactie op prikkels`}</Inline></li>
        <li><Inline>{`**Activity**: spierspanning en beweging`}</Inline></li>
        <li><Inline>{`**Respiration**: ademhaling`}</Inline></li>
      </ul>
      <PBody text={`Elk onderdeel krijgt 0, 1 of 2 punten. De score wordt bepaald op **1, 5 en 10 minuten** na de geboorte. Ongeveer 90% van de pasgeborenen heeft een score tussen 7 en 10. Bij een lagere score is verdere evaluatie nodig.`} />
      <PBody text={`Naast de Apgar-score kan ook de **navelstreng-pH** worden bepaald. Een **arteriële navelstreng-pH < 7,05** is afwijkend. Toch kunnen Apgar-score en navelstreng-pH **niet los van elkaar** gebruikt worden om de prognose te bepalen.`} />
      <SubHeading><Inline>{`Tabel 1. Onderdelen van de Apgar-score`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Score 0", "Score 1", "Score 2"], ["Appearance", "blauw overal", "blauw aan extremiteiten", "geen cyanose"], ["Pulse", "geen pols", "<100/min", ">100/min"], ["Grimace", "geen reactie", "grimassen of zwakke reactie", "niezen, hoesten of wegtrekken"], ["Activity", "geen beweging", "enige beweging", "actieve beweging"], ["Respiration", "geen ademhaling", "zwakke, trage of onregelmatige ademhaling", "krachtige huil"]]} />
    </div>
  )
}
