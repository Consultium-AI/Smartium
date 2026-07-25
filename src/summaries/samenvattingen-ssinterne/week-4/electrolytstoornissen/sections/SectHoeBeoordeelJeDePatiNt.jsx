import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe beoordeel je de patiënt?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De inschatting van de volume-status is belangrijk, maar niet heel betrouwbaar. De sensitiviteit en specificiteit van het beoordelen van hypovolemie zijn beide ongeveer 50%. Je moet het dus wel meenemen, maar niet als enige beslissende stap gebruiken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom zijn aanvullende bepalingen belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`serumglucose;`}</Inline></li>
        <li><Inline>{`serum-osmolaliteit;`}</Inline></li>
        <li><Inline>{`urine-osmolaliteit;`}</Inline></li>
        <li><Inline>{`urine-natrium.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Serumglucose en serum-osmolaliteit zijn nuttig om hyperglycemie-geïnduceerde hyponatriëmie en pseudohyponatriëmie uit te sluiten.`}</Inline></p>
    </div>
  )
}
