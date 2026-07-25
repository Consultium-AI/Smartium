import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Valincidenten: wat bedoelen we ermee?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een valincident is een onbedoelde verandering van de lichaamshouding, waardoor iemand op de grond of op een lager niveau terechtkomt. Bij ouderen neemt het aantal valincidenten toe. Daar zijn meerdere redenen voor, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meer kwetsbare en multimorbide ouderen;`}</Inline></li>
        <li><Inline>{`beperkte toegang tot langdurige zorg;`}</Inline></li>
        <li><Inline>{`ouderen die actiever zijn, bijvoorbeeld door sporten en reizen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Waarom is een val bij een oudere nooit zomaar “pech”?**
Omdat er vaak meerdere oorzaken tegelijk meespelen, zoals medicatie, orthostase, spierzwakte, visusproblemen of een onderliggende syncope.`} />
    </div>
  )
}
