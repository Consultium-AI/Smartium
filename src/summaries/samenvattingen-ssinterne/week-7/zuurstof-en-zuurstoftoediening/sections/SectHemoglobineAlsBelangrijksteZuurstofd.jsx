import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hemoglobine als belangrijkste zuurstofdrager`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Eén gram hemoglobine kan bij volledige verzadiging 1,34 ml zuurstof binden per 100 ml bloed. De arteriële zuurstofinhoud wordt weergegeven als:`}</Inline></p>
      <PBody text={`**CaO2 = (Hb × 1,34 × SaO2) + (PaO2 × 0,0031) mL/100 ml**`} />
      <p className="leading-relaxed"><Inline>{`Hierin staat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hb** voor de hoeveelheid hemoglobine;`}</Inline></li>
        <li><Inline>{`**SaO2** voor de zuurstofsaturatie van hemoglobine;`}</Inline></li>
        <li><Inline>{`**PaO2** voor de opgeloste zuurstof in het bloed.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een Hb van 10,0 mmol/l en 100% saturatie zit er ongeveer 21,44 ml O2 per 100 ml bloed gebonden aan hemoglobine, tegenover slechts 0,31 ml O2 per 100 ml bloed opgelost in plasma. Dat laat zien dat zuurstoftransport via hemoglobine ongeveer 70 keer belangrijker is dan transport in opgeloste vorm.`}</Inline></p>
    </div>
  )
}
