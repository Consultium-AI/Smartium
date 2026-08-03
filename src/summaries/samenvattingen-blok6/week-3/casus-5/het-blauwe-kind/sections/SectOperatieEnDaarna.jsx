import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Operatie en daarna`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tetralogie van Fallot moet chirurgisch gecorrigeerd worden. De operatie bestaat uit meerdere onderdelen. Het VSD wordt gesloten en de obstructie richting de longslagader wordt opgeheven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de pulmonaalstenose heel ernstig is, moet de annulus van de pulmonalisklep worden doorgenomen. Dan wordt een transannulaire patch geplaatst. Hierdoor wordt de uitstroom verbreed, maar de pulmonalisklepbladen sluiten daarna niet meer goed. Daardoor ontstaat levenslange pulmonalisklepinsufficiëntie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de gevolgen daarvan te groot worden, kan later een pulmonalisklepvervanging nodig zijn. Dat kan via een operatie of via een hartcatheterisatie. Vaak gebeurt dit pas op volwassen leeftijd.`}</Inline></p>
    </div>
  )
}
