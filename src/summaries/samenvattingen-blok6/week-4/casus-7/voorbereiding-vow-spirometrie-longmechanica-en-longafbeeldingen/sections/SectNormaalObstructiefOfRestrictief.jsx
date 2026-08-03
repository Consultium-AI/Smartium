import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Normaal, obstructief of restrictief?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Spirometrie helpt bij het herkennen van obstructieve en restrictieve longziekten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij obstructie is de luchtstroom belemmerd, vooral tijdens uitademing. Dat zie je bijvoorbeeld bij COPD en astma. Oorzaken kunnen bronchospasme, mucus of verlies van elasticiteit zijn. Typisch zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`FEV1 verlaagd;`}</Inline></li>
        <li><Inline>{`FVC normaal tot verlaagd;`}</Inline></li>
        <li><Inline>{`FEV1/FVC-ratio verlaagd;`}</Inline></li>
        <li><Inline>{`PEF vaak verlaagd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij restrictie is de longinhoud verlaagd en kunnen de longen zich niet volledig uitzetten, zoals bij longfibrose. Dan zie je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`FVC verlaagd;`}</Inline></li>
        <li><Inline>{`FEV1 verlaagd;`}</Inline></li>
        <li><Inline>{`FEV1/FVC-ratio normaal of verhoogd;`}</Inline></li>
        <li><Inline>{`TLC verlaagd.`}</Inline></li>
      </ul>
      <DataTable rows={[["Tabel 2. Kenmerken van obstructie en restrictie"], ["Kenmerk", "Obstructie", "Restrictie"], ["FEV1", "Verlaagd", "Verlaagd"], ["FVC", "Normaal tot verlaagd", "Verlaagd"], ["FEV1/FVC", "Verlaagd", "Normaal of verhoogd"], ["TLC", "Niet het hoofdkenmerk", "Verlaagd"], ["PEF", "Vaak verlaagd", "Niet typisch als hoofdkenmerk"]]} />
    </div>
  )
}
