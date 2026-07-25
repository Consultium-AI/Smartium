import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ECG is een registratie van de elektrische activiteit van het hart. Je leert het begrijpen door eerst de anatomie en het geleidingssysteem te kennen. Daarna beoordeel je elk ECG systematisch: ritme, frequentie, geleidingstijden, hartas, P-top, QRS-complex en ST-T-segment. De belangrijkste kunst is om steeds stap voor stap te kijken, zodat je geen afwijkingen mist. Door oefening leer je patronen herkennen, maar de basis blijft altijd dezelfde: rustig, systematisch en logisch beoordelen.`}</Inline></p>
    </div>
  )
}
