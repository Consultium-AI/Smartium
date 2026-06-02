import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="h-full p-5 bg-accent-50/90 dark:bg-accent-500/10 rounded-xl border border-accent-200 dark:border-accent-500/30 space-y-2">
      <h4 className="font-bold text-accent-900 dark:text-accent-100">
        <Inline>{`Allergisch contacteczeem`}</Inline>
      </h4>
      <p className="text-accent-800 dark:text-accent-200 text-sm leading-relaxed m-0">
        <Inline>{`Dit is een belangrijke differentiaaldiagnose. Hierbij is sprake van een type IV-reactie na sensibilisatie, met betrokkenheid van Langerhanscellen en Th1/Th17-cellen.`}</Inline>
      </p>
    </div>
  )
}
