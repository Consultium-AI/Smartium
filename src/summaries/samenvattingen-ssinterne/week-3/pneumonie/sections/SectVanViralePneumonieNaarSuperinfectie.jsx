import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van virale pneumonie naar superinfectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op basis van het griepachtige begin en het alveolair-interstitiële beeld denk je eerst aan een virale pneumonie. Daarna wordt sputum microscopisch onderzocht. Daarin zie je veel leukocyten en Gram-positieve coccen. Dat betekent dat de virale pneumonie gecompliceerd is door een bacteriële infectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een virale pneumonie kan dus een gecompliceerd beloop hebben. Dat is een belangrijk leerpunt: een “simpele griep” kan overgaan in een ernstige infectie met bacteriële superinfectie en sepsis.`}</Inline></p>
      <PBody text={`De Gramkleuring helpt ook om de bacteriële verwekker verder in te schatten. Gram-positieve coccen passen bij **Staphylococcus aureus** of **Streptococcus pneumoniae**. Gram-negatieve verwekkers zoals **Haemophilus influenzae** en **Moraxella catarrhalis** passen hier niet, omdat die een andere Gramkleuring zouden geven.`} />
    </div>
  )
}
