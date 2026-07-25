import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`B – Breathing`}</Inline></SubHeading>
      <PBody text={`Bij coma is er vaak sprake van een lage ademfrequentie, bijvoorbeeld bij intoxicaties. Let op **bradypneu**, bronchospasme, longoedeem en spanningspneumothorax. Geef zuurstof en streef naar een saturatie boven 94%. Neem een arteriële bloedgasanalyse af om ventilatie, oxygenatie en zuur-base-evenwicht te beoordelen. Bij ernstige bradypneu kan masker-ballonbeademing nodig zijn.`} />
      <p className="leading-relaxed"><Inline>{`Bij specifieke oorzaken behandel je gericht:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bronchospasme met inhalatiemedicatie;`}</Inline></li>
        <li><Inline>{`longoedeem met diuretica;`}</Inline></li>
        <li><Inline>{`spanningspneumothorax met spoeddrainage;`}</Inline></li>
        <li><Inline>{`verdenking opioïdoverdosis met naloxon.`}</Inline></li>
      </ul>
    </div>
  )
}
