import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`UV-straling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`UV-straling draagt bij aan huidveroudering door afbraak van elastine en collageen.`}</Inline></p>
      <DataTable rows={[["Type UV", "Golflengte", "Kenmerk"], ["---", "---", "---"], ["UVA", "315–400 nm", "Directe bruining, minst schadelijk"], ["UVB", "290–315 nm", "Meer energie, schade in de epidermis"], ["UVC", "200–290 nm", "Komt nauwelijks op het huidoppervlak, wordt geabsorbeerd door de atmosfeer"]]} />
      <p className="leading-relaxed"><Inline>{`UVB wordt in deze casus gezien als de straling met veel energie en schade in de epidermis.`}</Inline></p>
    </div>
  )
}
