import { Inline, DataTable, PBody } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Bij multipel myeloom passen verschillende klachten en afwijkingen. In deze casus zijn vooral belangrijk:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**anemie**`}</Inline></li>
        <li><Inline>{`**botpijn en lytische haarden**`}</Inline></li>
        <li><Inline>{`**nierfunctiestoornis**`}</Inline></li>
        <li><Inline>{`**infecties**`}</Inline></li>
        <li><Inline>{`**neuropathie**`}</Inline></li>
        <li><Inline>{`stijgend **M-proteïne** bij follow-up`}</Inline></li>
      </ul>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 1. Uitleg van de belangrijkste laboratoriumuitslagen`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Bepaling', 'Uitslag', 'Betekenis'],
          ['---', '---', '---'],
          ['Hemoglobine', '5,5 mmol/L', 'Laag, dus anemie'],
          ['MCV', '85 fL', 'Normaal, dus normocytaire anemie'],
          [
            'Reticulocyten',
            '32 x10^9/L',
            'Laag-normaal; bij anemie zou je meer aanmaak verwachten',
          ],
          ['Leukocyten', '5,3 x10^9/L', 'Normaal'],
          ['Trombocyten', '180 x10^9/L', 'Normaal'],
          ['Creatinine', '145 µmol/L', 'Verhoogd, dus verminderde nierfunctie'],
          ['Calcium', '2,40 mmol/L', 'Normaal'],
          ['IgG', '30 g/L', 'Verhoogd'],
          ['M-proteïne IgG-kappa', '26 g/L', 'Monoklonaal eiwit passend bij plasmacelziekte'],
        ]}
      />
      <PBody
        text={`**Vraagje:** waarom is een normale reticulocytenwaarde toch verdacht bij anemie?
**Mini-antwoord:** omdat het beenmerg bij anemie normaal extra rode bloedcellen zou moeten aanmaken. Een laag-normale reticulocytenwaarde past dus bij onvoldoende beenmergproductie.`}
      />
    </div>
  )
}
