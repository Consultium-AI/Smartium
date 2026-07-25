import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 2: Frequentie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De papiersnelheid van een ECG is standaard 25 mm per seconde. Het papier is verdeeld in kleine en grote hokjes:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klein hokje = 1 mm = 0,04 seconde`}</Inline></li>
        <li><Inline>{`groot hokje = 5 mm = 0,2 seconde`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De hartfrequentie kun je snel berekenen met:`}</Inline></p>
      <PBody text={`**300 / aantal grote hokjes tussen twee R-toppen**`} />
      <p className="leading-relaxed"><Inline>{`Bij een onregelmatig ritme, zoals atriumfibrilleren, moet je op een andere manier tellen.`}</Inline></p>
    </div>
  )
}
