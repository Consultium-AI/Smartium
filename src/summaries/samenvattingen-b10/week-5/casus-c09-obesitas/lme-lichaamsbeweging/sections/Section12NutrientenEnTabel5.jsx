import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Nutriëntendeficiënties en supplementen`}</Inline></h3>
      <p><Inline>{`Door de verminderde opname en inname na bariatrie bestaat een groot risico op nutriëntendeficiënties. Daarom worden levenslang supplementen aangeraden, zowel na gastric sleeve als na gastric bypass.`}</Inline></p>
      <p><Inline>{`De belangrijkste adviezen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Calcium: totale inname 1200–1500 mg per dag;`}</Inline></li>
        <li><Inline>{`Vitamine D: ten minste 3000 IE per dag;`}</Inline></li>
        <li><Inline>{`Vitamine B12: 350–500 microgram per dag;`}</Inline></li>
        <li><Inline>{`multivitaminen in hogere doseringen dan in de algemene bevolking.`}</Inline></li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Tabel 5. Meest voorkomende deficiënties na bariatrie`}</Inline></h3>
      <DataTable rows={[["Deficiëntie", "Belangrijkste kenmerken"], ["**Ijzer / ferritine**", "microcytaire anemie"], ["**Vitamine B12**", "macrocytaire anemie, neurologische klachten"], ["**Vitamine D + calcium**", "osteoporose, verhoogd fractuurrisico"], ["**Vitamine A**", "oogklachten, nachtblindheid"], ["**Vitamine E**", "anemie, ophthalmoplegie, neuropathie"], ["**Vitamine K**", "bloedingsneiging"]]} />
      <p><Inline>{`Deficiënties komen vaker voor bij meer malabsorptieve ingrepen. Ook botverlies is een belangrijk lange-termijnpunt, mede door vitamine D-deficiëntie, verminderde botkwaliteit door minder voedingsstoffen, minder mechanische belasting en hormonale veranderingen zoals afname van oestrogeen en verlies van spiermassa. Vooral postmenopauzale vrouwen en oudere personen lopen meer risico.`}</Inline></p>
    </div>
  )
}
