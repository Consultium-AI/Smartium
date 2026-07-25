import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Klinische beslisregel bij verdenking DVT`}</Inline></SubHeading>
      <DataTable rows={[["Gegeven", "Score"], ["Maligniteit aanwezig", "1"], ["Immobilisatie onderste extremiteiten", "1"], ["Recente bedrust > 3 dagen of grote operatie binnen 4 weken", "1"], ["Gelokaliseerde zwelling in verloop van het diepe veneuze systeem", "1"], ["Gezwollen been", "1"], ["Kuitzwelling > 3 cm verschil links-rechts", "1"], ["Pitting oedeem", "1"], ["Collaterale oppervlakkige venen zonder varices", "1"], ["Alternatieve diagnose waarschijnlijker", "-2"]]} />
      <p className="leading-relaxed"><Inline>{`Een score onder 2 betekent een lage klinische kans. Een score van 2 of hoger betekent een hogere kans.`}</Inline></p>
    </div>
  )
}
