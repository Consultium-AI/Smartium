import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnose en behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diagnose en behandeling moeten besproken worden in een multidisciplinair team met ten minste een longarts, reumatoloog of klinisch immunoloog en radioloog.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling kan bestaan uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anti-inflammatoire medicatie`}</Inline></li>
        <li><Inline>{`antifibrotische medicatie indien nodig`}</Inline></li>
        <li><Inline>{`fysiotherapie`}</Inline></li>
        <li><Inline>{`zuurstoftherapie`}</Inline></li>
        <li><Inline>{`bespreking van longtransplantatie bij gevorderde ziekte`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij veel patiënten spelen comorbiditeiten een rol, waardoor transplantatie niet altijd mogelijk is.`}</Inline></p>
    </div>
  )
}
