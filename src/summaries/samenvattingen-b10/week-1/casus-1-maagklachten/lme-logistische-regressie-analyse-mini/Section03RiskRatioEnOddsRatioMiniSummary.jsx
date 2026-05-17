import { Scale } from 'lucide-react';

export default function Section03RiskRatioEnOddsRatioMiniSummary() {
  return (
    <section id="sect-03" className="scroll-mt-24 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
          <Scale className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Risk ratio en odds ratio</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Bij het vergelijken van twee groepen kun je een risk ratio (RR) of odds ratio (OR) gebruiken. De RR vergelijkt kansen, de OR vergelijkt odds.</p>

        <div className="rounded-xl border border-amber-200 bg-white p-4">
          <p className="font-semibold text-slate-900">Interpretatie:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>RR of OR = 1: geen verband</li>
            <li>RR of OR &gt; 1: hogere waarde in de blootgestelde groep</li>
            <li>RR of OR &lt; 1: lagere waarde in de blootgestelde groep</li>
          </ul>
        </div>

        <p>Bij zeldzame uitkomsten zijn RR en OR ongeveer gelijk. Bij frequentere uitkomsten kan de OR verder van 1 af liggen dan de RR, waardoor de OR vaak sterker lijkt.</p>
      </div>
    </section>
  );
}
