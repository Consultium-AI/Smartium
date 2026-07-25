import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 4. Diagnostische strategie bij verdenking DVT`}</Inline></SubHeading>
      <DataTable rows={[["Klinische kans", "Volgende stap", "Uitslag", "Conclusie"], ["Laag", "D-dimeer", "normaal", "DVT uitgesloten"], ["Laag", "D-dimeer", "verhoogd", "DVT uitgesloten volgens schema, geen antistolling"], ["Hoog", "CUS", "DVT aangetoond", "antistolling starten"], ["Hoog met sterke verdenking en verhoogde D-dimeer", "CUS herhalen na 5–7 dagen", "", ""]]} />
      <p className="leading-relaxed"><Inline>{`Bij de casus met een dik been, orale anticonceptie, kuitzwelling en pitting oedeem kom je uit op een score van 3. Dan is verdere diagnostiek dus een CUS.`}</Inline></p>
    </div>
  )
}
