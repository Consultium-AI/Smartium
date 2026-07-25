import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische classificatie`}</Inline></SubHeading>
      <PBody text={`Op basis van de bevindingen wordt de diagnose **symptomatic myeloma** gesteld.`} />
      <p className="leading-relaxed"><Inline>{`De indeling verloopt grofweg van minder naar meer ziekteactiviteit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**MGUS**`}</Inline></li>
        <li><Inline>{`**Smoldering multiple myeloma**`}</Inline></li>
        <li><Inline>{`**Multiple myeloma**`}</Inline></li>
      </ul>
      <PBody text={`Bij **MGUS** is er wel een M-proteïne, maar nog geen relevante orgaanschade.
Bij **smoldering myeloma** is er meer afwijking, maar nog geen orgaanschade.
Bij **multiple myeloma** is er sprake van een M-proteïne, een verhoogd aantal plasmacellen in het beenmerg én **related organ or tissue impairment**.`} />
      <SubHeading><Inline>{`ROTI en CRAB`}</Inline></SubHeading>
      <PBody text={`De orgaanschade bij multipel myeloom wordt **ROTI** genoemd: **Related Organ and Tissue Impairment**. Een andere benaming is **CRAB**.`} />
      <PBody text={`**CRAB staat voor:**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**C**: hypercalciëmie`}</Inline></li>
        <li><Inline>{`**R**: renal failure`}</Inline></li>
        <li><Inline>{`**A**: anemie`}</Inline></li>
        <li><Inline>{`**B**: bone lesions`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Kern van de classificatie`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening", "M-proteïne", "Beenmergplasmacellen", "Orgaanschade"], ["MGUS", "aanwezig, laag", "< 10%", "nee"], ["Smoldering myeloma", "aanwezig, hoger", "≥ 10%", "nee"], ["Multiple myeloma", "aanwezig", "≥ 10%", "ja"]]} />
    </div>
  )
}
