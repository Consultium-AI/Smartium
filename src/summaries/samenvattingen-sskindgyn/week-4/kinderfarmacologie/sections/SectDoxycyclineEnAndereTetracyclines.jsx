import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doxycycline en andere tetracyclines`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Doxycycline kan zich in het gebit afzetten en blijvende tandverkleuring geven. Dat geldt ook voor het volwassen gebit als het middel is gegeven vóór het wisselen. Daarom is doxycycline gecontra-indiceerd bij kinderen jonger dan 8 jaar. Hetzelfde geldt voor andere tetracyclines, zoals minocycline.`}</Inline></p>
    </div>
  )
}
