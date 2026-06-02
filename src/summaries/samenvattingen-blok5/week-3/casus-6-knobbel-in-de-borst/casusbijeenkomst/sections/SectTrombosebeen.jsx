import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`3. Trombosebeen`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een trombosebeen is vooral waarschijnlijk bij:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**unilaterale** zwelling;`}</Inline></li>
        <li><Inline>{`pijn en gespannen gevoel;`}</Inline></li>
        <li><Inline>{`eventueel roodheid;`}</Inline></li>
        <li>
          <Inline>{`risicofactoren zoals **immobilisatie**, **orale anticonceptie**, recente reis of operatie.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Een trombosebeen kan soms rood zijn, maar het erytheem staat meestal minder op de voorgrond dan bij erysipelas.`}</Inline>
      </p>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Diagnostiek:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Eerste Lijns beslisregel DVT** met risicoscore;`}</Inline></li>
        <li><Inline>{`eventueel **D-dimeer**;`}</Inline></li>
        <li><Inline>{`bij verdenking: **echo van het been**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`starten met **antistolling**;`}</Inline></li>
        <li>
          <Inline>{`zo snel mogelijk **ambulante compressietherapie** gedurende minimaal 6 maanden;`}</Inline>
        </li>
        <li>
          <Inline>{`bij een **niet-uitgelokte trombose** moet onderliggende pathologie worden uitgesloten, zoals maligniteit of een stollingsstoornis;`}</Inline>
        </li>
        <li>
          <Inline>{`bij een **uitgelokte trombose** is er een duidelijke aanleiding, zoals immobilisatie of orale anticonceptie.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
