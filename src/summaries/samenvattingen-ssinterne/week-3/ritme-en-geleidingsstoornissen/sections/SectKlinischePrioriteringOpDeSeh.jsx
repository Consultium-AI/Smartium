import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische prioritering op de SEH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de vier patiënten uit de casus was de volgorde van behandeling:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**dhr. Vlug** – ventriculaire tachycardie`}</Inline></li>
        <li><Inline>{`**dhr. Sloom** – derdegraads AV-blok`}</Inline></li>
        <li><Inline>{`**mw. Rap** – AVNRT`}</Inline></li>
        <li><Inline>{`**dhr. Chaos** – atriumfibrilleren`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De reden voor deze volgorde is dat VT het snelst kan degenereren naar VF en dus direct levensbedreigend is. Een derdegraads AV-blok kan snel leiden tot hemodynamische problemen en hartfalen. AVNRT is vaak erg hinderlijk, maar meestal minder acuut levensbedreigend. Atriumfibrilleren is op zichzelf meestal niet acuut levensbedreigend, zeker niet bij een verder structureel normaal hart.`}</Inline></p>
    </div>
  )
}
