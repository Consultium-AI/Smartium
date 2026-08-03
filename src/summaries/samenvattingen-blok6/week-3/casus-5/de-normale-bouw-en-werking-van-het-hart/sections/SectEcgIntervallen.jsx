import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ECG-intervallen`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PR-interval:** tijd van begin P-top tot begin QRS; dit weerspiegelt de geleiding van SA-knoop via atria en AV-knoop naar de ventrikels`}</Inline></li>
        <li><Inline>{`**QRS-duur:** duur van ventriculaire depolarisatie`}</Inline></li>
        <li><Inline>{`**QT-interval:** totale duur van ventriculaire depolarisatie en repolarisatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De elektrische gebeurtenissen op het ECG hangen samen met de mechanische gebeurtenissen in de hartcyclus. Zo volgt de atriale contractie op de P-top en volgt ventriculaire contractie op het QRS-complex.`}</Inline></p>
    </div>
  )
}
