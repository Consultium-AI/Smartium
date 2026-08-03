import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is homeostase?`}</Inline></SubHeading>
      <PBody text={`Homeostase betekent dat het lichaam een **stabiele interne toestand** probeert te behouden, zodat het organisme kan blijven leven, ook wanneer de interne of externe omgeving verandert. Het gaat hier om het organisme als geheel.`} />
      <PBody text={`Een belangrijk uitgangspunt is dat homeostase meestal werkt via **negatieve feedback**. Dat betekent dat een verandering in een variabele juist een reactie oproept die die verandering weer tegenwerkt. Zo wordt de variabele teruggebracht richting de normale waarde.`} />
      <PBody text={`**Aandacht-vraag:** waarom is negatieve feedback zo belangrijk?
**Mini-antwoord:** omdat het systeem daarmee zichzelf steeds weer terugstuurt naar de gewenste waarde.`} />
    </div>
  )
}
