/**
 * Kleuren voor overzichtslinks (samenvatting / oefenvragen): LME groen, overige moduletypes elk eigen tint.
 * Ontbreekt moduleKind → LME (emerald).
 */
const KIND_DEFAULT = 'lme'

const STYLES = {
  lme: {
    hoverBorder: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/45',
    hoverShadow: 'dark:hover:shadow-emerald-950/20',
    hoverBg: 'hover:bg-emerald-50/50',
    iconWrap: 'bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20',
    iconText: 'text-emerald-700 dark:text-emerald-400',
    titleHover: 'group-hover:text-emerald-900 dark:group-hover:text-emerald-300',
    chevronHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
  },
  lmo: {
    hoverBorder: 'hover:border-sky-400/70 dark:hover:border-sky-500/45',
    hoverShadow: 'dark:hover:shadow-sky-950/20',
    hoverBg: 'hover:bg-sky-50/50',
    iconWrap: 'bg-sky-100 dark:bg-sky-500/15 dark:ring-1 dark:ring-sky-500/20',
    iconText: 'text-sky-800 dark:text-sky-400',
    titleHover: 'group-hover:text-sky-900 dark:group-hover:text-sky-300',
    chevronHover: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
  },
  stm: {
    hoverBorder: 'hover:border-violet-400/70 dark:hover:border-violet-500/45',
    hoverShadow: 'dark:hover:shadow-violet-950/20',
    hoverBg: 'hover:bg-violet-50/50',
    iconWrap: 'bg-violet-100 dark:bg-violet-500/15 dark:ring-1 dark:ring-violet-500/20',
    iconText: 'text-violet-800 dark:text-violet-400',
    titleHover: 'group-hover:text-violet-900 dark:group-hover:text-violet-300',
    chevronHover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
  },
  lmv: {
    hoverBorder: 'hover:border-orange-400/70 dark:hover:border-orange-500/45',
    hoverShadow: 'dark:hover:shadow-orange-950/20',
    hoverBg: 'hover:bg-orange-50/50',
    iconWrap: 'bg-orange-100 dark:bg-orange-500/15 dark:ring-1 dark:ring-orange-500/20',
    iconText: 'text-orange-800 dark:text-orange-400',
    titleHover: 'group-hover:text-orange-900 dark:group-hover:text-orange-300',
    chevronHover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
  },
  casusbijeenkomst: {
    hoverBorder: 'hover:border-rose-400/70 dark:hover:border-rose-500/45',
    hoverShadow: 'dark:hover:shadow-rose-950/20',
    hoverBg: 'hover:bg-rose-50/50',
    iconWrap: 'bg-rose-100 dark:bg-rose-500/15 dark:ring-1 dark:ring-rose-500/20',
    iconText: 'text-rose-800 dark:text-rose-400',
    titleHover: 'group-hover:text-rose-900 dark:group-hover:text-rose-300',
    chevronHover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
  },
}

export function getSummaryModuleLinkStyles(kind) {
  const k = kind && STYLES[kind] ? kind : KIND_DEFAULT
  return STYLES[k]
}

export function summaryModuleKindLabel(kind) {
  if (kind === 'casusbijeenkomst') return 'Casusbijeenkomst'
  if (kind === 'lmo') return 'LMO'
  if (kind === 'stm') return 'STM'
  if (kind === 'lmv') return 'LMV'
  return 'LME'
}

export function summaryModuleHeaderBadgeClass(kind) {
  const k = kind && STYLES[kind] ? kind : KIND_DEFAULT
  const map = {
    lme: 'bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/25 text-emerald-800 dark:text-emerald-300',
    lmo: 'bg-sky-100 dark:bg-sky-500/15 dark:ring-1 dark:ring-sky-500/25 text-sky-900 dark:text-sky-300',
    stm: 'bg-violet-100 dark:bg-violet-500/15 dark:ring-1 dark:ring-violet-500/25 text-violet-900 dark:text-violet-300',
    lmv: 'bg-orange-100 dark:bg-orange-500/15 dark:ring-1 dark:ring-orange-500/25 text-orange-900 dark:text-orange-300',
    casusbijeenkomst:
      'bg-rose-100 dark:bg-rose-500/15 dark:ring-1 dark:ring-rose-500/25 text-rose-900 dark:text-rose-300',
  }
  return map[k]
}
