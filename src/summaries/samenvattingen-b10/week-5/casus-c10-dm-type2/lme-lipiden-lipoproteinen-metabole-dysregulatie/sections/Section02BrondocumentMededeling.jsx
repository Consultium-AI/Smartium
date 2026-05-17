import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        <Inline>{`(Nog geen samenvatting.md — draai lme_summarize.py voor deze LME.)`}</Inline>
      </p>
    </div>
  )
}
