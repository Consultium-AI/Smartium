import { Target } from 'lucide-react';

export default function Section06InterpretatieVanCoefficientenMiniSummary() {
  return (
    <section id="sect-06" className="scroll-mt-24 rounded-2xl border border-violet-200 bg-violet-50/60 p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
          <Target className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Interpretatie van coëfficiënten</h2>
        </div>
      </div>

      <div className="mt-5 space-y-4 text-slate-700 leading-7">
        <p>Een coëfficiënt \(b\) in een logistisch model heeft betrekking op de log-odds. Door exponentiëren krijg je de odds ratio:</p>

        <div className="rounded-xl bg-white p-4 font-mono text-sm text-slate-900 ring-1 ring-slate-200">{String.raw`OR=e^b`}</div>

        <p>Bij een binaire voorspeller betekent de OR het verschil tussen de groepen. Bijvoorbeeld bij roken: een OR van 2 betekent dat de odds op de uitkomst bij rokers twee keer zo groot zijn als bij niet-rokers.</p>

        <p>Bij een continue voorspeller betekent de OR de verandering per één eenheid toename. Bijvoorbeeld: \(OR=1{,}05\) betekent dat de odds per extra eenheid met 5% toenemen. Een OR groter dan 1 wijst op een toename, een OR kleiner dan 1 op een afname.</p>
      </div>
    </section>
  );
}
