import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijke interpretatie van aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek moet passen bij de klinische verdenking. Niet elk rood en gezwollen gebied heeft beeldvorming nodig. Bij een duidelijke erysipelas is de diagnose klinisch en is echo van arm of oksel niet geïndiceerd. Bij een verdenking op DVT is echo of D-dimeer wel passend. Bij een vergrote lymfeklier kan echo helpen om te beoordelen of het beeld reactief lijkt, bijvoorbeeld door aanwezigheid van een vet hilum.`}</Inline></p>
    </div>
  )
}
