import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Belangrijk is:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`radiotherapie wordt in principe **na een borstsparende operatie** gegeven;`}</Inline>
        </li>
        <li>
          <Inline>{`na ablatieve chirurgie is adjuvante radiotherapie in principe niet standaard geïndiceerd;`}</Inline>
        </li>
        <li>
          <Inline>{`de plaats van radiotherapie hangt af van de operatie en van de totale behandelstrategie.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
