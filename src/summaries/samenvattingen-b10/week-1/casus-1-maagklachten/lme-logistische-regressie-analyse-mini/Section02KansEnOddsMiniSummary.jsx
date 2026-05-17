import { Sigma } from 'lucide-react';

export default function Section02KansEnOddsMiniSummary() {
  return (
    <section id="sect-02" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-teal-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-teal-100 p-2 text-teal-700">
          <Sigma className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Kans en odds</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>De kans is het aandeel personen met de gebeurtenis:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`P(\text{uitkomst})=\frac{\text{aantal met uitkomst}}{\text{totaal}}`}</div>

        <p>De odds is de verhouding tussen de kans dat de gebeurtenis wel optreedt en de kans dat die niet optreedt:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`\text{odds}=\frac{p}{1-p}`}</div>

        <p>Bij kleine kansen liggen kans en odds dicht bij elkaar; dan geldt ongeveer odds ≈ kans. Bij frequentere uitkomsten gaan ze steeds verder uiteen.</p>
      </div>
    </section>
  );
}
