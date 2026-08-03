import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een PDA`}</Inline></SubHeading>
      <PBody text={`Sinds de jaren ’50 is chirurgische sluiting mogelijk. Daarbij wordt via een **linkszijdige posterolaterale thoracotomie** de ductus onderbonden of geklipt. Tegenwoordig wordt een PDA meestal **percutaan** gesloten met een **coil** via hartcatheterisatie. Omdat er dan geen thoracotomie nodig is en het herstel sneller is, heeft deze behandeling tegenwoordig de voorkeur.`} />
    </div>
  )
}
