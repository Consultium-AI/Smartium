import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG is een registratie van de elektrische activiteit van het hart. Je begrijpt het pas goed als je de anatomie, het geleidingssysteem en de elektrische vectoren kent. Op het ECG zie je vooral de activatie van de hartspier terug: P-top voor de atria, QRS voor de ventrikels en T-top voor de repolarisatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een ECG beoordeel je altijd systematisch: ritme, frequentie, geleidingstijden, hartas, P-top, QRS, ST-T, vergelijking met oud ECG en daarna een conclusie. Zo mis je minder snel belangrijke afwijkingen.`}</Inline></p>
    </div>
  )
}
