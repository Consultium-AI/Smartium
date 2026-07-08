import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diastolische geruisen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diastolische geruisen zijn vooral te horen bij lekkende semilunaire kleppen. Het bloed stroomt dan richting de apex cordis, waar het geruis het best hoorbaar is. Vaak is er ook een systolisch geruis aanwezig, omdat de door terugstromend bloed vergrote kamers meer bloed door een normaal gedimensioneerde klepring moeten pompen. Dat heet een relatieve stenose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Theoretisch kan een diastolisch geruis ook ontstaan bij stenose van de AV-kleppen. Daarvoor moet het drukverschil tussen boezem en kamer groot genoeg zijn. Als een AV-klepstenose hoorbaar is, zijn er meestal ook tekenen van hartfalen.`}</Inline></p>
    </div>
  )
}
