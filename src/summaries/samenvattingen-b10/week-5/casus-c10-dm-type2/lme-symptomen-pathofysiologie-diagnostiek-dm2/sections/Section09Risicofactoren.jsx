import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Risicofactoren voor DM2`}</Inline></h3>
      <p><Inline>{`Belangrijke risicofactoren zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**obesitas** en een chronisch positieve energiebalans;`}</Inline></li>
        <li><Inline>{`**weinig lichamelijke activiteit** of zittend werk;`}</Inline></li>
        <li><Inline>{`**Hindoestaanse afkomst**;`}</Inline></li>
        <li><Inline>{`**hogere leeftijd**;`}</Inline></li>
        <li><Inline>{`**doorgemaakte zwangerschapsdiabetes**;`}</Inline></li>
        <li><Inline>{`genetische aanleg;`}</Inline></li>
        <li><Inline>{`prenatale blootstellingen;`}</Inline></li>
        <li><Inline>{`hoog of juist laag geboortegewicht;`}</Inline></li>
        <li><Inline>{`dieetfactoren;`}</Inline></li>
        <li><Inline>{`medicatiegebruik;`}</Inline></li>
        <li><Inline>{`milieuvervuiling;`}</Inline></li>
        <li><Inline>{`slaaptekort.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij obesitas spelen meerdere mechanismen mee. Vetweefsel verandert van samenstelling, er ontstaat laaggradige ontsteking en de afgifte van adipokines verandert. Ook kan vet zich ophopen op plekken waar het normaal minder hoort, zoals in de lever en spieren. Dit versterkt de insulineresistentie.`}</Inline></p>
    </div>
  )
}
