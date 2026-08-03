import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aan de slag met een plan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goed plan voor zorg op afstand begint dus niet bij de techniek, maar bij de zorgvraag. Bij niertransplantatiepatiënten moet je stap voor stap bedenken hoe het programma eruitziet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Je kunt daarbij denken aan vragen als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Wat laat je patiënten meten?`}</Inline></li>
        <li><Inline>{`Hoe vaak moeten ze meten?`}</Inline></li>
        <li><Inline>{`Welke metingen blijven altijd nodig?`}</Inline></li>
        <li><Inline>{`Welke metingen zijn alleen in de eerste periode na transplantatie nodig?`}</Inline></li>
        <li><Inline>{`Wat doe je bij afwijkende uitslagen?`}</Inline></li>
        <li><Inline>{`Geldt dat voor iedereen?`}</Inline></li>
        <li><Inline>{`Hoe zorg je dat patiënten de juiste apparatuur krijgen?`}</Inline></li>
        <li><Inline>{`Wie moet je betrekken in het team?`}</Inline></li>
        <li><Inline>{`Hoe regel je wet- en regelgeving?`}</Inline></li>
        <li><Inline>{`Wat kost het?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een praktisch plan moet dus zowel medisch als organisatorisch kloppen.`}</Inline></p>
    </div>
  )
}
