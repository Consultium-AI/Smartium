import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Hematurie kan microscopisch of macroscopisch zijn. Vooral **pijnloze macroscopische hematurie** is een alarmsymptoom en moet altijd verder worden onderzocht. De belangrijkste oorzaken zijn blaaskanker, nier- of uretertumoren, stollingsstoornissen, infecties en nierstenen. Bij de diagnostiek zijn anamnese, urinesediment, laboratoriumonderzoek, cystoscopie en CT-scan belangrijk.`} />
      <PBody text={`Blaaskanker wordt gestadieerd met de **TNM-classificatie** en gegradeerd als laag- of hooggradig. Het onderscheid tussen **niet-spierinvasief** en **spierinvasief** blaaskarcinoom is cruciaal voor prognose en behandeling. Niet-spierinvasieve tumoren worden behandeld met **TURBT** en daarna blaasspoelingen, zoals Mitomycine C of BCG. Spierinvasieve tumoren vragen vaak om **radicale cystectomie** of **chemoradiatie**. De prognose hangt sterk af van het stadium, en vroege herkenning van hematurie is daarom van groot klinisch belang.`} />
    </div>
  )
}
