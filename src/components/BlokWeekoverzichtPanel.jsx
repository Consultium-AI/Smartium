import { ExternalLink, FileText } from 'lucide-react'

/**
 * Officieel weekoverzicht-PDF bovenaan een uitgeklapt blok (samenvattingen / oefenvragen).
 * Klik opent de PDF direct in een nieuw tabblad.
 * Bestanden staan in public/weekoverzichten/ (Vite serveert ze onder BASE_URL).
 */
export default function BlokWeekoverzichtPanel({ title, pdfFileName }) {
  const pdfUrl = `${import.meta.env.BASE_URL}weekoverzichten/${pdfFileName}`

  return (
    <div className="mb-6 mt-4 rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm ring-1 ring-slate-900/5 dark:border-slate-600/80 dark:bg-slate-900/70 dark:ring-white/5">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-start gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors hover:bg-slate-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500/50 dark:hover:bg-slate-800/50"
      >
        <div className="shrink-0 rounded-lg bg-primary-100 p-2 dark:bg-primary-500/20">
          <FileText className="h-4 w-4 text-primary-700 dark:text-primary-300" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Planning en weekindeling volgens het facultaire overzicht.
            <span className="mt-1 block text-[11px] font-medium text-primary-600 dark:text-primary-400">
              Klik om het weekoverzicht in een nieuw tabblad te openen.
            </span>
          </p>
        </div>
        <ExternalLink
          className="mt-1 h-5 w-5 shrink-0 text-slate-400 dark:text-slate-500"
          strokeWidth={2}
          aria-hidden
        />
      </a>
    </div>
  )
}
