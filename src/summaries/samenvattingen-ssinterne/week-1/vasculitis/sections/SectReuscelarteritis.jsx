import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reuscelarteritis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Reuscelarteritis is een chronische vasculitis van grote en middelgrote vaten, met name de aortaboog en de craniale aftakkingen. De aandoening wordt ook arteritis temporalis genoemd. Er is overlap met polymyalgia rheumatica.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het is een belangrijke oorzaak van acute blindheid. Ongeveer 20% van de patiënten krijgt visusverlies, meestal door vertraagde diagnose en behandeling. Visusverlies is irreversibel, dus snelle herkenning is essentieel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Reuscelarteritis is een medisch noodgeval. Bij verdenking moet direct met hoge dosering steroïden worden gestart.`}</Inline></p>
    </div>
  )
}
