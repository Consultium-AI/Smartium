import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste onderdelen die je moet kennen zijn de rechteratrium, linkeratrium, rechterventrikel, linkerventrikel, aorta, tricuspidalisklep en mitralisklep.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Het rechteratrium ontvangt bloed uit het lichaam via de vena cava superior en inferior.`}</Inline></li>
        <li><Inline>{`Het linkeratrium ontvangt bloed uit de longen via de vier pulmonaalvenen.`}</Inline></li>
        <li><Inline>{`De rechterventrikel pompt bloed naar de longen via de longslagader.`}</Inline></li>
        <li><Inline>{`De linkerventrikel pompt zuurstofrijk bloed de aorta in.`}</Inline></li>
        <li><Inline>{`De tricuspidalisklep ligt tussen rechteratrium en rechterventrikel.`}</Inline></li>
        <li><Inline>{`De mitralisklep ligt tussen linkeratrium en linkerventrikel.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze anatomie is belangrijk, omdat de elektrische activiteit van het hart zich later in het ECG laat vertalen naar herkenbare patronen.`}</Inline></p>
    </div>
  )
}
