import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veiligheid bij MRI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI vraagt extra aandacht voor veiligheid, omdat het magneetveld sterk is.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Patiënten met **pacemakers**, **aneurysmaclips** of andere metalen implantaten kunnen mogelijk geen MRI ondergaan.`}</Inline></li>
        <li><Inline>{`Alle metalen voorwerpen moeten uit de scanruimte worden verwijderd, vanwege **projectielgevaar**.`}</Inline></li>
        <li><Inline>{`Het magneetveld staat altijd aan, dus ook als er niet gescand wordt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat komt doordat de scanner werkt met een supergeleidende magneet die continu gekoeld moet worden met vloeibaar helium.`}</Inline></p>
    </div>
  )
}
