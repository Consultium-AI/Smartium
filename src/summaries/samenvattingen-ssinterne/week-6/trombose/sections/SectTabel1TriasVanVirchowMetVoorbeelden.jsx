import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 1. Trias van Virchow met voorbeelden`}</Inline></SubHeading>
      <DataTable rows={[["Categorie", "Voorbeelden"], ["Hypercoagulabiliteit", "trombofilie, zwangerschap en kraambed, maligniteit, sepsis"], ["Vaatwandbeschadiging", "atherosclerose, venapunctie, hartkleplijden of klepvervanging, trauma of operatie"], ["Stase", "linkerventrikeldisfunctie, atriumfibrilleren, immobiliteit of verlamming, veneuze insufficiëntie of varices"]]} />
      <p className="leading-relaxed"><Inline>{`Sommige risicofactoren passen dus duidelijk in één van deze drie groepen. Zo hoort immobiliteit bij stase, terwijl een operatie of trauma juist past bij vaatwandbeschadiging. Zwangerschap en maligniteit passen bij een verhoogde stollingsneiging.`}</Inline></p>
    </div>
  )
}
