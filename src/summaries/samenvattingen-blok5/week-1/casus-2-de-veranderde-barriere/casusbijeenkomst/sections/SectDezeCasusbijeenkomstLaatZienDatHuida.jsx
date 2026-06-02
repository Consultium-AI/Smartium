import { Inline } from './SectionShared'

const cards = [
  {
    title: 'psoriasis',
    body: 'chronische ontstekingsziekte met schilferende plaques, nagelafwijkingen en mogelijk artritis psoriatica',
    tone: 'primary',
  },
  {
    title: 'eczeem',
    body: 'verstoorde huidbarrière, waarbij smeren en ontstekingsremming centraal staan',
    tone: 'accent',
  },
  {
    title: 'IgA-vasculitis',
    body: 'palpabele purpura met mogelijke buik-, gewrichts- en nierbetrokkenheid',
    tone: 'purple',
  },
  {
    title: 'hemofilie A',
    body: 'stollingsstoornis die zich kan uiten als hematoom of bloedingsneiging',
    tone: 'rose',
  },
]

const toneClass = {
  primary:
    'bg-primary-50/90 dark:bg-primary-500/10 border-primary-200 dark:border-primary-500/30 text-primary-900 dark:text-primary-100',
  accent:
    'bg-accent-50/90 dark:bg-accent-500/10 border-accent-200 dark:border-accent-500/30 text-accent-900 dark:text-accent-100',
  purple:
    'bg-purple-50/90 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30 text-purple-900 dark:text-purple-100',
  rose: 'bg-rose-50/90 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30 text-rose-900 dark:text-rose-100',
}

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Deze casusbijeenkomst laat zien dat huidafwijkingen verschillende oorzaken kunnen hebben:`}</Inline>
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`h-full p-5 rounded-xl border space-y-2 ${toneClass[c.tone]}`}
          >
            <h4 className="font-bold capitalize m-0">
              <Inline>{c.title}</Inline>
            </h4>
            <p className="text-sm leading-relaxed m-0 opacity-90">
              <Inline>{c.body}</Inline>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
