import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verschillen tussen sectoren`}</Inline></SubHeading>
      <PBody text={`Het gemiddelde ziekteverzuim in Nederland ligt rond de **4%**, maar er zijn duidelijke verschillen tussen sectoren. In sommige sectoren ligt het verzuim onder de 3%, terwijl het in andere sectoren boven de 5% uitkomt. De **gezondheidszorg** behoort tot de sectoren met het hoogste ziekteverzuim.`} />
      <SubHeading><Inline>{`Tabel 2. Verzuim naar sector`}</Inline></SubHeading>
      <DataTable rows={[["Verzuimpercentage", "Sectoren"], ["< 3%", "ICT, horeca, landbouw"], ["3–5%", "Bouw, vervoer"], ["> 5%", "Gezondheidszorg, overheidsdiensten"]]} />
      <PBody text={`Ook is zichtbaar dat ongeveer **4 op de 10** Nederlandse werknemers per jaar **1–15 dagen** verzuimt wegens ziekte, en ongeveer **1 op de 10** werknemers **meer dan 15 dagen**.`} />
    </div>
  )
}
