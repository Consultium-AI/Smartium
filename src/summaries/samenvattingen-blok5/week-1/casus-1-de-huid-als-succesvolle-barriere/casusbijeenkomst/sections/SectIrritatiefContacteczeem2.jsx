import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="h-full p-5 bg-primary-50/90 dark:bg-primary-500/10 rounded-xl border border-primary-200 dark:border-primary-500/30 space-y-2">
      <h4 className="font-bold text-primary-900 dark:text-primary-100">
        <Inline>{`Irritatief contacteczeem`}</Inline>
      </h4>
      <p className="text-primary-800 dark:text-primary-200 text-sm leading-relaxed m-0">
        <Inline>{`Dit is de meest waarschijnlijke diagnose in de casus. Het ontstaat door directe schade aan de huidbarrière en hoeft niet eerst gesensibiliseerd te worden.`}</Inline>
      </p>
    </div>
  )
}
