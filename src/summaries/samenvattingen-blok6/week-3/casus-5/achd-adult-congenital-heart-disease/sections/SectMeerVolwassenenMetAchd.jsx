import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Meer volwassenen met ACHD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Door de verbeterde overleving groeit het aantal volwassenen met een aangeboren hartafwijking gestaag. Veel van hen zijn gecorrigeerd of behandeld, maar hebben nog steeds follow-up nodig. De groep volwassenen met ACHD is inmiddels groter dan de groep kinderen met een aangeboren hartafwijking.`}</Inline></p>
    </div>
  )
}
