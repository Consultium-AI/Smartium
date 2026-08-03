import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invasief monitoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast niet-invasieve thuismonitoring bestaat ook invasief monitoren. Daarbij wordt een sensor in de patiënt geplaatst. Een voorbeeld is een druksensor in de pulmonale arterie bij ernstig hartfalen, zoals de CardioMEMS-sensor. Daarmee kan de patiënt nog beter op afstand gevolgd worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt genoemd dat in een Nederlandse studie het aantal ziekenhuisopnames bij hartfalen met 44% daalde door deze technologie. In de uitleg wordt dat gekoppeld aan een hazard ratio van 0,56: dat betekent dat de groep met sensor in één jaar 44% minder kans op opname had dan de groep zonder sensor.`}</Inline></p>
    </div>
  )
}
