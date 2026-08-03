import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nadelen van zorg op afstand`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zorg op afstand heeft ook duidelijke beperkingen. Het grootste nadeel is dat je patiënten niet lichamelijk kunt onderzoeken. Daardoor kun je subtielere tekenen van ziekte missen, zoals minder snel lopen of benauwdheid bij inspanning.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is zorg op afstand afhankelijk van ICT. De techniek moet betrouwbaar werken. Als een teleconsult gepland staat, moet de verbinding wel tot stand komen. Ook zijn er kosten verbonden aan de ICT.`}</Inline></p>
    </div>
  )
}
