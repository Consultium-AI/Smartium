import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na deze stof moet je een **systematisch en volledig lichamelijk onderzoek van de pasgeborene** kunnen uitvoeren, met speciale aandacht voor de **leeftijdsspecifieke benadering** van het kind. Daarbij hoort dat je weet **waar je op let bij een gezonde neonaat**, welke **normale bevindingen** je verwacht en welke **afwijkingen** kunnen passen bij bijvoorbeeld geboortetrauma, aangeboren afwijkingen of ziekte.`} />
    </div>
  )
}
