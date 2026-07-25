import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De coassistent`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de coschappen wordt veel van je gevraagd. Je komt in een dynamische, onbekende en soms emotioneel belastende omgeving terecht. Je wordt fysiek, mentaal en emotioneel uitgedaagd. Ook diensten en verstoring van het dag- en nachtritme horen daarbij.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat kan gevolgen hebben voor verkeersveiligheid na een nachtdienst, voor je sociale leven en voor de patiëntveiligheid.`}</Inline></p>
    </div>
  )
}
