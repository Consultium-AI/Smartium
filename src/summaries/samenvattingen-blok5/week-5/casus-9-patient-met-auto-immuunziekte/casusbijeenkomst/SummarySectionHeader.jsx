export default function SummarySectionHeader({ icon: Icon, title, tone = 'primary' }) {
  const tones = {
    primary: {
      box: 'bg-primary-100 dark:bg-primary-500/20',
      icon: 'text-primary-600 dark:text-primary-400',
    },
    accent: {
      box: 'bg-accent-100 dark:bg-accent-500/20',
      icon: 'text-accent-600 dark:text-accent-400',
    },
    purple: {
      box: 'bg-purple-100 dark:bg-purple-500/20',
      icon: 'text-purple-600 dark:text-purple-400',
    },
    emerald: {
      box: 'bg-emerald-100 dark:bg-emerald-500/20',
      icon: 'text-emerald-600 dark:text-emerald-400',
    },
    amber: {
      box: 'bg-amber-100 dark:bg-amber-500/20',
      icon: 'text-amber-600 dark:text-amber-400',
    },
    rose: {
      box: 'bg-rose-100 dark:bg-rose-500/20',
      icon: 'text-rose-600 dark:text-rose-400',
    },
    sky: {
      box: 'bg-sky-100 dark:bg-sky-500/20',
      icon: 'text-sky-600 dark:text-sky-400',
    },
    indigo: {
      box: 'bg-indigo-100 dark:bg-indigo-500/20',
      icon: 'text-indigo-600 dark:text-indigo-400',
    },
  }
  const t = tones[tone] || tones.primary

  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className={`w-10 h-10 ${t.box} rounded-xl flex items-center justify-center shrink-0`}
      >
        <Icon className={`w-5 h-5 ${t.icon}`} />
      </div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
    </div>
  )
}
