import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is dit klinisch belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Volwassenen met een aangeboren hartafwijking kunnen jarenlang redelijk functioneren, maar later alsnog problemen ontwikkelen. Daarom is het belangrijk om deze patiënten goed te blijven volgen, zodat late complicaties tijdig worden opgespoord en behandeld.`}</Inline></p>
    </div>
  )
}
