export default function Sect08SamenspelTussenOntstekingEnFibrose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenspel tussen ontsteking en fibrose</h2>
      <p>
        Ontsteking en fibrose zijn nauw met elkaar verbonden. Ontsteking zet het fibroseproces in gang en houdt het in stand. Fibrose is dus niet alleen een gevolg van schade, maar ook van de manier waarop de lever op die schade reageert.
      </p>
      <p>
        Daarom is het belangrijk om leverfibrose te begrijpen als een dynamisch proces. Het gaat niet alleen om het eindresultaat van littekenvorming, maar ook om de voortdurende wisselwerking tussen ontsteking, celactivatie en matrixvorming.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Ontsteking en fibrose naast elkaar</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Ontsteking</th>
              <th className="px-4 py-3 font-semibold">Fibrose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Reactie op schade</td>
              <td className="px-4 py-3 align-top">Vorming van bindweefsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Betrokkenheid van ontstekingscellen en signaalstoffen</td>
              <td className="px-4 py-3 align-top">Betrokkenheid van cellen die matrix en littekenweefsel opbouwen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Kan het fibroseproces starten en onderhouden</td>
              <td className="px-4 py-3 align-top">Is het structurele gevolg van langdurige activatie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
