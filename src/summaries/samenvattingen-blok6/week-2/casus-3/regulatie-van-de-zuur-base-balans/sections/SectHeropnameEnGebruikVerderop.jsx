import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Heropname en gebruik verderop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`NH4+ komt daarna aan in de dikke opstijgende lis van Henle, waar het via de Na-K-2Cl-cotransporter wordt opgenomen. Daardoor komt het in het interstitium terecht. In de nier ontstaat zo een concentratiegradiënt, waarbij steeds meer NH3 aanwezig is naarmate je dieper in de nier komt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wanneer de nier zuur moet uitscheiden, wordt H+ via de H+-ATPase in de verzamelbuis het lumen in gepompt. Tegelijkertijd kan NH3 vanuit het interstitium naar het lumen bewegen. Daar bindt NH3 direct aan H+ en ontstaat NH4+. Op die manier kan H+ worden uitgescheiden zonder dat de urine extreem zuur hoeft te worden.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is NH3 zo handig voor de nier?`} />
      <p className="leading-relaxed"><Inline>{`Omdat NH3 snel beschikbaar is, H+ goed kan binden en zo veel zuur kan wegvangen zonder dat de urine nog zuurder hoeft te worden.`}</Inline></p>
    </div>
  )
}
