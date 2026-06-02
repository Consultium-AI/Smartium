import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-600">
        <ul className="list-disc pl-6 space-y-2.5">
          <li>
            <Inline>{`**methotrexaat** is mogelijk ongunstig bij alcoholgebruik en leverproblemen`}</Inline>
          </li>
          <li>
            <Inline>{`**ciclosporine** is minder geschikt bij verminderde nierfunctie`}</Inline>
          </li>
          <li>
            <Inline>{`**acitretine** helpt niet op artritis psoriatica`}</Inline>
          </li>
          <li>
            <Inline>{`**lichttherapie** is ongunstig bij voorgeschiedenis van huidmaligniteiten`}</Inline>
          </li>
          <li>
            <Inline>{`bij een type I reactie op amoxicilline moet je rekening houden met antibiotische keuzes`}</Inline>
          </li>
          <li>
            <Inline>{`metoprolol kan psoriasis verergeren en moet daarom besproken worden`}</Inline>
          </li>
        </ul>
      </div>
    </div>
  )
}
