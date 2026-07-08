import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gevolgen en counseling`}</Inline></SubHeading>
      <PBody text={`Na een doorgemaakt HELLP-syndroom is er een **kans op herhaling** in een volgende zwangerschap, geschat op **2–6%**. Ook is er een grotere kans op **intra-uteriene groeivertraging** bij de foetus.`} />
      <PBody text={`Bij een volgende zwangerschap kan **acetylsalicylzuur** het risico op pre-eclampsie en foetale groeirestrictie verlagen. Dit kan gestart worden zodra er een **positieve zwangerschapstest** is en wordt voortgezet tot **36 weken**. Er is een indicatie voor aspirine bij **1 hoog risico factor** of bij **2 of meer matige risicofactoren**.`} />
      <SubHeading><Inline>{`Tabel 4. Risicofactoren voor pre-eclampsie`}</Inline></SubHeading>
      <DataTable rows={[["Hoog risico", "Matig risico"], ["Pre-eclampsie in eerdere zwangerschap", "Nullipariteit"], ["Chronische nierziekte", "Maternale leeftijd ≥ 40 jaar"], ["Auto-immuunziekte zoals SLE of APS", "Interval tussen zwangerschappen > 10 jaar"], ["Type 1 of 2 diabetes mellitus", "Pre-eclampsie in familieanamnese"], ["Pre-existente hypertensie", "Obesitas (BMI > 35 kg/m²)"], ["", "Meerlingzwangerschap"], ["", "Placentaire insufficiëntie in voorgeschiedenis"], ["", "Zwangerschap na eiceldonatie"]]} />
      <PBody text={`Na een zwangerschap met pre-eclampsie of HELLP is het verstandig om na **6 weken postpartum** onderzoek te doen naar **trombofilie**, het **antifosfolipidesyndroom** en **hyperhomocysteïnemie**, omdat deze aandoeningen het risico op pre-eclampsie verhogen. Als daar iets afwijkends uitkomt, is in een volgende zwangerschap profylaxe met **laagmoleculairgewichtheparine** in combinatie met **acetylsalicylzuur** geïndiceerd. Bij een nieuwe zwangerschap is ook **preconceptieadvies** verstandig.`} />
    </div>
  )
}
