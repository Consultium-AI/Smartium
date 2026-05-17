import { Shield } from 'lucide-react';

export default function Section03FunctiesMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow p-6 border border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-amber-600" />
          <h2 className="text-xl font-bold text-amber-800">Functies van maagzuur</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            { nr: '1', title: 'Afweer', desc: 'Denatureert membraaneiwitten → doodt bacteriën/virussen. Zuurtolerante bacteriën overleven door intracellulaire buffering.' },
            { nr: '2', title: 'Pepsine-activering', desc: 'Pepsinogeen → pepsine (optimum pH 1,5–3). Kettingreactie: pepsine activeert meer pepsinogeen.' },
            { nr: '3', title: 'Eiwitdenaturatie', desc: '3D-structuur verdwijnt → eiwitten beter toegankelijk voor enzymen.' },
            { nr: '4', title: 'Vetvertering', desc: 'Maaglipase: triglyceriden → vetzuren + diglyceriden. Vetzuren signaleren hormoonsynthese en pylorusopening.' },
            { nr: '5', title: 'Vitamine B12-opname', desc: 'B12 → los van voedingseiwit → bindt haptocorrin → in duodenum vrij → bindt intrinsic factor → opname in ileum.' }
          ].map(f => (
            <div key={f.nr} className="bg-white/70 rounded-lg p-3">
              <span className="inline-block bg-amber-200 text-amber-800 text-xs font-bold px-2 py-0.5 rounded mb-1">{f.nr}</span>
              <h3 className="font-semibold text-amber-700 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-700 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
