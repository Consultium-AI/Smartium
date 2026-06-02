import { Inline } from './SectionShared'

const cards = [
  {
    title: 'Vasculitis bij het kind',
    body: 'purpura op de benen met buikpijn, gewrichtsklachten en mogelijke nierbetrokkenheid (erytrocyten in de urine)',
    tone: 'primary',
  },
  {
    title: 'Bloedingsprobleem',
    body: 'blauwe plekken, lang nabloeden, slijmvliesbloedingen; stollings- en von Willebrand-onderzoek',
    tone: 'accent',
  },
]

const toneClass = {
  primary:
    'bg-primary-50/90 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/30 text-primary-900 dark:text-primary-100',
  accent:
    'bg-accent-50/90 dark:bg-accent-500/10 border-accent-200 dark:border-accent-500/30 text-accent-900 dark:text-accent-100',
}

export default function Section() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className={`h-full p-5 rounded-xl border space-y-2 ${toneClass[c.tone]}`}
        >
          <h4 className="font-bold m-0">
            <Inline>{c.title}</Inline>
          </h4>
          <p className="text-sm leading-relaxed m-0 opacity-90">
            <Inline>{c.body}</Inline>
          </p>
        </div>
      ))}
    </div>
  )
}
