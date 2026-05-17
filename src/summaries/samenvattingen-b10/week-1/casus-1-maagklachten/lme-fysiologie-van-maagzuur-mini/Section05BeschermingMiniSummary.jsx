import { ShieldCheck } from 'lucide-react';

export default function Section05BeschermingMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow p-6 border border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="w-6 h-6 text-slate-600" />
          <h2 className="text-xl font-bold text-slate-800">Bescherming van de maagwand</h2>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-slate-700 mb-2">Mucus-bicarbonaatbarrière</h3>
          <p className="text-sm text-gray-700">
            Mucuscellen vormen een beschermende slijmlaag van <strong>mucus + bicarbonaat</strong>, die voorkomt dat zuur en pepsine het epitheel direct bereiken.
          </p>
        </div>

        <div className="bg-white/70 rounded-lg p-4">
          <h3 className="font-semibold text-slate-700 mb-2">Rol van Prostaglandine E2</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• ↑ Mucus- en bicarbonaatsecretie</li>
            <li>• ↓ HCl-secretie</li>
            <li>• ↑ Lokale doorbloeding</li>
            <li>• ↑ Celproliferatie (herstel epitheel)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
