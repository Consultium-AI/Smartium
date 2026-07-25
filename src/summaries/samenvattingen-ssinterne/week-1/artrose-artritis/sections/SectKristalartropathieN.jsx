import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kristalartropathieën`}</Inline></SubHeading>
      <PBody text={`**Jicht** en **CPPD** vallen onder de kristalartropathieën.`} />
      <PBody text={`Bij **jicht** slaan **uraatkristallen** neer in gewrichten en weke delen. Dit geeft een ontstekingsreactie met:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**effusie**`}</Inline></li>
        <li><Inline>{`**synovitis**`}</Inline></li>
      </ul>
      <PBody text={`Een typisch beeld is een **man van middelbare leeftijd** met een **rood, dik en gezwollen MTP-1**.`} />
      <PBody text={`**Aandachtsvraag:** Wat is het belangrijkste verschil tussen artrose en RA op beeldvorming?
**Mini-antwoord:** Artrose geeft vooral kraakbeenverlies met asymmetrische gewrichtsspleetversmalling en osteofyten; RA geeft synovitis met peri-articulaire osteopenie en erosies.`} />
    </div>
  )
}
