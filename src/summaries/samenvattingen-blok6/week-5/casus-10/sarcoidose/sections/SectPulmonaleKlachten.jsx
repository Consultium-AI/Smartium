import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pulmonale klachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij patiënten met thoracale betrokkenheid zijn de meest voorkomende klachten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**droge hoest**`}</Inline></li>
        <li><Inline>{`**dyspneu bij inspanning**`}</Inline></li>
        <li><Inline>{`**vermoeidheid**`}</Inline></li>
        <li><Inline>{`**pijn op de borst**`}</Inline></li>
      </ul>
      <PBody text={`De pijn op de borst is meestal **constant** en niet inspanningsgebonden. De pijn kan gelokaliseerd zijn achter het borstbeen, onder de ribben of tussen de schouderbladen. De plaats en ernst van de pijn hangen meestal niet goed samen met de uitgebreidheid van de granulomen of lymfekliervergroting.`} />
      <p className="leading-relaxed"><Inline>{`Pulmonale klachten gaan vaak samen met algemene verschijnselen zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`malaise`}</Inline></li>
        <li><Inline>{`koorts`}</Inline></li>
        <li><Inline>{`gewichtsverlies`}</Inline></li>
        <li><Inline>{`spierzwakte`}</Inline></li>
        <li><Inline>{`inspanningsintolerantie`}</Inline></li>
      </ul>
    </div>
  )
}
