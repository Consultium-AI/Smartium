import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van elektrische activatie naar het ECG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het ECG laat de elektrische activiteit van de hartspier zien. De activiteit van het geleidingssysteem zelf is niet direct zichtbaar op het oppervlakte-ECG. Wat je wel ziet, is de activatie van de atria en ventrikels.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verschillende elektrische activaties samen vormen een vector: een pijl met een richting en grootte. Het ECG registreert hoe deze vector zich in de tijd gedraagt.`}</Inline></p>
      <SubHeading><Inline>{`Het P-QRS-T-complex`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De **P-top** staat voor de depolarisatie van de atria.`}</Inline></li>
        <li><Inline>{`Het **QRS-complex** staat voor de depolarisatie van de ventrikels.`}</Inline></li>
        <li><Inline>{`De **T-top** staat voor de repolarisatie van de ventrikels.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De repolarisatie van de atria is normaal gesproken niet zichtbaar, omdat deze klein is en samenvalt met het QRS-complex.`}</Inline></p>
    </div>
  )
}
