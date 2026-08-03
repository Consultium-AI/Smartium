import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leeftijd en geslacht`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose presenteert zich meestal tussen de **20 en 60 jaar**. Hoewel de aandoening vroeger vooral werd gezien bij jongvolwassenen, wordt tegenwoordig meer dan de helft van de gevallen vastgesteld bij mensen **ouder dan 40 jaar**. Vrouwen zijn bij diagnose vaak ouder dan mannen.`} />
    </div>
  )
}
