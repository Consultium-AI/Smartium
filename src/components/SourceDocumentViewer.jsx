import { Download, ExternalLink } from 'lucide-react'

/**
 * Ingebed origineel brondocument (HTML uit docx) met downloadlink.
 * Bestanden staan in public/ (Vite serveert ze onder BASE_URL).
 */
export default function SourceDocumentViewer({ htmlUrl, docxUrl, docxFileName }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <a
          href={docxUrl}
          download={docxFileName}
          className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-900 transition-colors hover:bg-sky-100 dark:border-sky-600/50 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:bg-sky-500/20"
        >
          <Download className="h-4 w-4 shrink-0" strokeWidth={2} />
          Download Word (.docx)
        </a>
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ExternalLink className="h-4 w-4 shrink-0" strokeWidth={2} />
          Open in nieuw tabblad
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-600 ring-1 ring-slate-900/5 dark:ring-white/5">
        <iframe
          src={htmlUrl}
          title="Brondocument"
          className="block w-full min-h-[75vh] bg-white dark:bg-slate-900"
        />
      </div>
    </div>
  )
}
