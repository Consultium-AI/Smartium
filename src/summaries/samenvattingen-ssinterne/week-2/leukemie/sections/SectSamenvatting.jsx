import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Leukemie is een groep kwaadaardige bloedziekten waarbij het onderscheid tussen acuut/chronisch en myeloïd/lymfatisch centraal staat. Acute leukemieën zijn snel progressief en bestaan uit onrijpe blasten; chronische leukemieën verlopen trager en bevatten meer uitgerijpte cellen. Diagnostiek gebeurt met bloedonderzoek, bloeduitstrijk, beenmergonderzoek, immunofenotypering, cytogenetica en moleculaire diagnostiek. Bij AML en ALL zijn respectievelijk myeloïde of lymfoïde markers belangrijk, terwijl CLL en CML elk hun eigen typische immunologische en genetische kenmerken hebben. Prognose wordt sterk bepaald door leeftijd, biologische kenmerken en minimale restziekte. Behandeling varieert van intensieve chemotherapie en stamceltransplantatie tot TKI’s bij CML en geselecteerde combinatieschema’s bij CLL.`}</Inline></p>
    </div>
  )
}
