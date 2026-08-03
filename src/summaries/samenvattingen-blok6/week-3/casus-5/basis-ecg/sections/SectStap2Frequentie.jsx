import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 2: frequentie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De standaard papiersnelheid van een ECG is 25 mm per seconde. Het papier is verdeeld in kleine en grote hokjes:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klein hokje: 1 mm = 0,04 seconde`}</Inline></li>
        <li><Inline>{`groot hokje: 5 mm = 0,2 seconde`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De frequentie kun je berekenen door de afstand tussen twee R-toppen te meten.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`frequentie = 60 / tijd tussen twee R-toppen in seconden`}</Inline></li>
        <li><Inline>{`of: frequentie = 300 / aantal grote hokjes tussen twee R-toppen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een onregelmatig ritme, zoals atriumfibrilleren, moet je de slagen binnen een bepaalde tijd tellen en omrekenen.`}</Inline></p>
    </div>
  )
}
