import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een ASD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook een klein ASD kan na de geboorte nog spontaan sluiten. Als er geen klachten zijn en geen belangrijke volumeoverbelasting, kan men daarom soms afwachten. Bij symptomatische ASD’s of bij belangrijke RV-volumeoverbelasting is sluiten wel aangewezen.`}</Inline></p>
      <PBody text={`Vroeger gebeurde dat alleen chirurgisch, maar tegenwoordig kan een ASD vaak **percutaan** worden gesloten via hartcatheterisatie. Daarbij wordt een **closure device** met twee schijven op de randen van het defect vastgeklemd. Voor centraal gelegen defecten, vooral **ASD-II**, met voldoende restseptumweefsel rondom het defect heeft percutane sluiting de voorkeur. Het herstel is dan veel sneller en minder belastend dan bij een operatie.`} />
    </div>
  )
}
