import SummaryLayout from './SummaryLayout'

function SectionHtml({ html }) {
  return (
    <div
      className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed
        [&_strong]:font-medium [&_strong]:text-slate-900 dark:[&_strong]:text-slate-100
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
        [&_em]:italic
        [&_sub]:text-[0.75em] [&_sub]:align-sub
        [&_sup]:text-[0.75em] [&_sup]:align-super
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
        [&_th]:border [&_th]:border-slate-300 [&_th]:dark:border-slate-600 [&_th]:px-3 [&_th]:py-2 [&_th]:bg-slate-100 [&_th]:dark:bg-slate-800 [&_th]:text-left [&_th]:font-medium
        [&_td]:border [&_td]:border-slate-300 [&_td]:dark:border-slate-600 [&_td]:px-3 [&_td]:py-2"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function ConfigMiniSummary({ config, miniLmeId, blokLabel = 'Blok 9' }) {
  return (
    <SummaryLayout
      title={config.title}
      description={config.description}
      caseLabel={config.caseLabel}
      blokLabel={blokLabel}
      tableOfContents={[]}
      practiceLink={config.practiceLink}
      summaryVariantToggle={{
        activeLmeId: miniLmeId,
        variants: [
          { id: config.baseLmeId, label: 'Uitgebreid' },
          { id: miniLmeId, label: 'Kort' },
        ],
      }}
    >
      {config.sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24 mb-12">
          <SectionHtml html={s.html || s.body} />
        </section>
      ))}
    </SummaryLayout>
  )
}
