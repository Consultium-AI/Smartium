import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Arteriële bloedgasanalyse`}</Inline></SubHeading>
      <PBody text={`De arteriële bloedgasanalyse, ook wel **Astrupbepaling**, is de belangrijkste test om een zuur-base stoornis objectief vast te stellen. Daarbij worden gemeten:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pH`}</Inline></li>
        <li><Inline>{`pCO₂`}</Inline></li>
        <li><Inline>{`pO₂`}</Inline></li>
      </ul>
      <PBody text={`Het actuele bicarbonaat wordt berekend met de Henderson-Hasselbalch-vergelijking. Daarnaast wordt vaak het **base excess** gerapporteerd.`} />
    </div>
  )
}
