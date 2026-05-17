import { AlertTriangle } from 'lucide-react';

export default function Section05UlcuslijdenMiniSummary() {
  return (
    <section id="sect-05" className="scroll-mt-24">
      <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-violet-700 p-2 text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Ulcuslijden</h2>
        </div>
        <p className="leading-7 text-slate-700">Ulcuslijden betekent de vorming van een zweer in het maag-darmgebied. Ook dit kan ontstaan als gevolg van <em>H. pylori</em>-infectie. De beschadiging van het slijmvlies en de verstoring van de normale bescherming van de maagwand maken het mogelijk dat ulcera ontstaan. Ulcuslijden past dus in het spectrum van schade die volgt op kolonisatie en chronische irritatie van het maagslijmvlies.</p>
      </div>
    </section>
  );
}
