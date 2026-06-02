import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`Naast de paarse-vlek-casus komt melanoom uitgebreid terug. Hier draait het om stadiëring, prognose, follow-up en behandeling.`}</Inline>
      </p>
    </div>
  )
}
