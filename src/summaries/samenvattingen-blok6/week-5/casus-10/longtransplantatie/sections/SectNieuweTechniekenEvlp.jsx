import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nieuwe technieken: EVLP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Door de schaarste aan donorlongen moet elk aanbod zorgvuldig worden beoordeeld. Een ideale donorlong komt van een donor tussen 20 en 45 jaar, die nooit heeft gerookt, geen infectie heeft, een normale bronchoscopie heeft en geen bacteriegroei laat zien. In werkelijkheid voldoet minder dan 10% van de donorlongen aan al deze ideale criteria.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom is er behoefte aan technieken om marginale donorlongen toch te kunnen gebruiken.`}</Inline></p>
    </div>
  )
}
