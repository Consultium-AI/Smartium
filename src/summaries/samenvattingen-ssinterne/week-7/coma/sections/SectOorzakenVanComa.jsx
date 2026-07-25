import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van coma`}</Inline></SubHeading>
      <PBody text={`Coma kan ontstaan door **structurele** of **functionele** stoornissen in de hersenen. Er zijn verschillende manieren om oorzaken in te delen, bijvoorbeeld:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`focaal of diffuus;`}</Inline></li>
        <li><Inline>{`primair cerebraal of extracerebraal;`}</Inline></li>
        <li><Inline>{`supratentorieel of infratentorieel;`}</Inline></li>
        <li><Inline>{`symmetrisch of asymmetrisch;`}</Inline></li>
        <li><Inline>{`structureel of niet-structureel.`}</Inline></li>
      </ul>
      <PBody text={`Bij **focaal hersenletsel** is vaak de hersenstam of de reticulaire formatie betrokken, direct of door inklemming. Dan zie je vaak afwijkende hersenstamreflexen. Bij **diffuse** oorzaken, zoals metabole stoornissen, intoxicaties en narcosemiddelen, zijn de hersenstamreflexen juist meestal intact. De cortex is hiervoor het meest gevoelig, de hersenstam het minst.`} />
      <p className="leading-relaxed"><Inline>{`De meest voorkomende oorzaken van coma zijn metabool, infectieus, neurologisch en toxisch-medicamenteus. In deze module ligt de nadruk vooral op de metabole, infectieuze en toxisch-medicamenteuze oorzaken.`}</Inline></p>
    </div>
  )
}
