import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een VSD`}</Inline></SubHeading>
      <PBody text={`Als een VSD leidt tot volumebelasting van de linker ventrikel, is er een indicatie om het defect te sluiten. De meest gebruikte behandeling is **chirurgische sluiting**. Vaak wordt daarbij een **patch** gebruikt, bijvoorbeeld van GoreTex, om het gat te dichten.`} />
      <PBody text={`Soms kan een **musculair VSD** ook via een catheter worden gesloten met een **closure device**. Dat is meestal niet geschikt voor **perimembraneuze VSD’s**, omdat die dicht bij de hartkleppen liggen. Een device kan daar de klepbeweging hinderen, waardoor de kleppen gaan lekken of niet goed openen.`} />
    </div>
  )
}
