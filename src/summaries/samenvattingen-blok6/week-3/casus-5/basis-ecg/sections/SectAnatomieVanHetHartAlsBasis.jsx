import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van het hart als basis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste structuren die je moet kennen zijn de rechteratrium, linkeratrium, rechterventrikel, linkerventrikel en de aorta. Ook de tricuspidalisklep en mitralisklep zijn belangrijk.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Het rechteratrium ontvangt bloed uit het lichaam via de vena cava superior en inferior.`}</Inline></li>
        <li><Inline>{`Het linkeratrium ontvangt bloed uit de longen via vier longvenen.`}</Inline></li>
        <li><Inline>{`De rechterventrikel pompt bloed naar de longen via de longslagader.`}</Inline></li>
        <li><Inline>{`De linkerventrikel pompt zuurstofrijk bloed de aorta in.`}</Inline></li>
        <li><Inline>{`De tricuspidalisklep ligt tussen rechteratrium en rechterventrikel.`}</Inline></li>
        <li><Inline>{`De mitralisklep ligt tussen linkeratrium en linkerventrikel.`}</Inline></li>
      </ul>
    </div>
  )
}
