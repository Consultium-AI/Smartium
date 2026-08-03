import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hematurie: zichtbaar of microscopisch`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hematurie betekent bloed in de urine. Dat kan op twee manieren zichtbaar zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Macroscopische hematurie**: zichtbaar met het blote oog.`}</Inline></li>
        <li><Inline>{`**Microscopische hematurie**: alleen zichtbaar onder de microscoop.`}</Inline></li>
      </ul>
      <PBody text={`Macroscopische hematurie heeft vaak een **urologische oorzaak**, zoals blaaskanker of nierstenen. Maar hematurie kan ook passen bij een **nefrologische oorzaak**, vooral wanneer het om microscopische hematurie gaat. Soms is het onderscheid lastig en is microscopische beoordeling nodig.`} />
      <PBody text={`Bij vrouwen moet je altijd ook denken aan **menstrueel bloedverlies** als mogelijke verklaring voor bloed in of rond de urine.`} />
    </div>
  )
}
