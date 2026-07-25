import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laboratoriumonderzoek van de secundaire hemostase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het eindproduct van de secundaire hemostase is fibrine. Daarom meten stollingstesten in feite hoe lang het duurt voordat een bepaalde hoeveelheid fibrine wordt gevormd. De uitslag wordt uitgedrukt in seconden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste screeningstesten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PT**: protrombinetijd`}</Inline></li>
        <li><Inline>{`**aPTT**: geactiveerde partiële tromboplastinetijd`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De PT meet de tijd tot stolling na toevoeging van thromboplastine en calcium. Dit test de extrinsieke stolling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De aPTT meet de tijd tot stolling na toevoeging van fosfolipiden, een activator van de intrinsieke stolling, en calcium. In het aPTT-reagens zit geen tissue factor.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. PT en aPTT in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Test", "Wat wordt toegevoegd?", "Wat wordt getest?"], ["PT", "Thromboplastine + calcium", "Extrinsieke stolling"], ["aPTT", "Fosfolipiden + activator + calcium", "Intrinsieke stolling"]]} />
    </div>
  )
}
