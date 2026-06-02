import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Aanvullend onderzoek moet passen bij de klinische verdenking. Niet elk rood en gezwollen gebied heeft beeldvorming nodig. Bij een duidelijke erysipelas is de diagnose klinisch en is echo van arm of oksel niet geïndiceerd. Bij een verdenking op DVT is echo of D-dimeer wel passend. Bij een vergrote lymfeklier kan echo helpen om te beoordelen of het beeld reactief lijkt, bijvoorbeeld door aanwezigheid van een vet hilum.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Het laboratorium ondersteunt vooral de gedachte aan ontsteking:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CRP kan verhoogd zijn;`}</Inline></li>
        <li><Inline>{`leukocyten kunnen verhoogd zijn, maar dat hoeft niet;`}</Inline></li>
        <li><Inline>{`bezinking is aspecifiek en kan verhoogd zijn bij chronische processen.`}</Inline></li>
      </ul>
    </div>
  )
}
