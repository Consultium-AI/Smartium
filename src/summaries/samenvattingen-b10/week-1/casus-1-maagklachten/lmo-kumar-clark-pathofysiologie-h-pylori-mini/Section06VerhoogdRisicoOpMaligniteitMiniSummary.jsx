import { ShieldAlert } from 'lucide-react';

export default function Section06VerhoogdRisicoOpMaligniteitMiniSummary() {
  return (
    <section id="sect-06" className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-slate-800 p-2 text-white">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Verhoogd risico op maligniteit</h2>
        </div>
        <p className="leading-7 text-slate-700">Een belangrijk leerpunt is dat <em>H. pylori</em> niet alleen acute of chronische ontsteking kan veroorzaken, maar ook samenhangt met een verhoogd risico op maligniteit. Langdurige infectie en aanhoudende beschadiging van de maagwand kunnen op termijn bijdragen aan kwaadaardige afwijkingen. Dit benadrukt het klinische belang van de infectie: de gevolgen blijven niet beperkt tot directe klachten, maar kunnen ook op lange termijn ernstig zijn.</p>
      </div>
    </section>
  );
}
