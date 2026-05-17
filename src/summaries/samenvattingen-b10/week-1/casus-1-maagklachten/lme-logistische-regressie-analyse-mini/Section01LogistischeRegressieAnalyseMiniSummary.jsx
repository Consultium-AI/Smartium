import { BookOpen } from 'lucide-react';

export default function Section01LogistischeRegressieAnalyseMiniSummary() {
  return (
    <section id="sect-01" className="scroll-mt-24 rounded-2xl border border-violet-200 bg-violet-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Logistische regressie analyse</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Logistische regressie gebruik je wanneer de uitkomst binair is, dus bijvoorbeeld wel/geen ziekte, ja/nee of 1/0. Het doel is de kans op de uitkomst te voorspellen. Dat model is geschikt omdat kansen altijd tussen 0 en 1 liggen. Een belangrijk voordeel is dat meerdere voorspellers tegelijk kunnen worden meegenomen.</p>

        <p>Het logistische regressiemodel wordt meestal geschreven als:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\ln\left(\frac{p}{1-p}\right)=b_0+b_1X_1+b_2X_2+\dots+b_kX_k`}</div>

        <p>Hierin is \(p\) de kans op de uitkomst. De linkerzijde heet de logit: de natuurlijke logaritme van de odds. Door deze transformatie kan een lineair model worden gebruikt op een variabele die zelf niet lineair en niet onbeperkt is.</p>
      </div>
    </section>
  );
}
