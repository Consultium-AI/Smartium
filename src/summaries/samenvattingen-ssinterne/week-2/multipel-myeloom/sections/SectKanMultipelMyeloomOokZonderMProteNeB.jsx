import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kan multipel myeloom ook zonder M-proteïne bestaan?`}</Inline></SubHeading>
      <PBody text={`Ja. Als er **geen band** in het eiwithspectrum wordt gevonden en de immunofixatie negatief is, is multipel myeloom **niet automatisch uitgesloten**. Er zijn dan twee mogelijkheden:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Vrije lichte-keten multipel myeloom**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dan moeten vrije lichte ketens in serum en urine aanvullend worden bepaald.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Niet-secretorend multipel myeloom**`}</Inline></li>
      </ul>
      <PBody text={`Dit komt voor bij ongeveer **3%** van de gevallen. Hierbij zijn bloed en urine negatief voor immunofixatie.`} />
    </div>
  )
}
