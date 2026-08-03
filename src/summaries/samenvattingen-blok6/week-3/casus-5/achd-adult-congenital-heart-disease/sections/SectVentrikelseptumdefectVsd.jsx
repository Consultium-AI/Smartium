import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ventrikelseptumdefect (VSD)`}</Inline></SubHeading>
      <PBody text={`Een **VSD** is een gat in het tussenschot tussen de hartkamers. Het is de **meest voorkomende aangeboren hartafwijking**.`} />
      <PBody text={`De klachten en gevolgen hangen af van de **grootte** en **plaats** van het defect. Kleine VSD’s geven meestal geen problemen en kunnen zelfs spontaan sluiten, vaak op kinderleeftijd. Grote VSD’s geven juist duidelijke hemodynamische gevolgen. Dan ontstaat **volumebelasting van de linker ventrikel**. Dit kan al op kinderleeftijd leiden tot hartfalen, **failure to thrive** en frequente luchtweginfecties. Als een groot VSD niet tijdig wordt gesloten, kunnen op den duur **linkerventrikeldisfunctie** en **pulmonale hypertensie** ontstaan.`} />
    </div>
  )
}
