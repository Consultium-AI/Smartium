import { Activity } from 'lucide-react';

export default function Section05LogitEnSCurveMiniSummary() {
  return (
    <section id="sect-05" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-200 p-2 text-slate-700">
          <Activity className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Logit en S-curve</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Logistische regressie werkt met een S-vormige curve. Niet de kans zelf, maar de logit wordt lineair gemodelleerd:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\ln\left(\frac{p}{1-p}\right)=b_0+b_1X`}</div>

        <p>Daaruit volgt de kans:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`p=\frac{e^{b_0+b_1X}}{1+e^{b_0+b_1X}}`}</div>

        <p>De logit kan alle waarden aannemen van \(-\infty\) tot \(+\infty\), terwijl de kans na terugtransformatie altijd tussen 0 en 1 blijft. De relatie tussen voorspeller en log-odds is lineair; de relatie tussen voorspeller en kans is S-vormig.</p>
      </div>
    </section>
  );
}
