import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Bij gelokaliseerd mammacarcinoom is de behandelintentie **curatief**. Dat betekent dat men probeert te genezen.`}</Inline>
      </p>
    </div>
  )
}
