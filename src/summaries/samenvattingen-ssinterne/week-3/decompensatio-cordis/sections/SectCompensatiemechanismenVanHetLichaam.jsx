import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Compensatiemechanismen van het lichaam`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer het hart minder goed functioneert, probeert het lichaam dit te compenseren. Dat gebeurt onder andere door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een toename van de hartfrequentie;`}</Inline></li>
        <li><Inline>{`een toename van het hartminuutvolume door dilatatie van de linkerkamer;`}</Inline></li>
        <li><Inline>{`een toename van de spierdikte van de hartspier.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze compensatiemechanismen kunnen acuut en subacuut optreden. Ze helpen het lichaam tijdelijk, maar lossen het onderliggende probleem niet op.`}</Inline></p>
    </div>
  )
}
