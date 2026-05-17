import { SlidersHorizontal } from 'lucide-react';

export default function Section04RegulatieMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl shadow p-6 border border-violet-200">
        <div className="flex items-center gap-3 mb-4">
          <SlidersHorizontal className="w-6 h-6 text-violet-600" />
          <h2 className="text-xl font-bold text-violet-800">Regulatie van maagzuursecretie</h2>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-violet-700 mb-2">Stimulatoren & remmers</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <p className="font-medium text-green-700 mb-1">▲ Stimulatie</p>
              <ul className="space-y-0.5">
                <li>• Acetylcholine (n. vagus)</li>
                <li>• Gastrine (G-cellen)</li>
                <li>• Histamine (ECL-cellen)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-rose-700 mb-1">▼ Remming</p>
              <ul className="space-y-0.5">
                <li>• Somatostatine (D-cellen)</li>
                <li>• Secretine, GIP, CCK</li>
                <li>• PGE2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white/70 rounded-lg p-3">
            <h4 className="font-semibold text-violet-700 text-sm">Cefale fase</h4>
            <p className="text-xs text-gray-700 mt-1">Vóór voedselinname: geur, smaak, kauwen, slikken, hypoglykemie → n. vagus → acetylcholine.</p>
          </div>
          <div className="bg-white/70 rounded-lg p-3">
            <h4 className="font-semibold text-violet-700 text-sm">Gastrische fase</h4>
            <p className="text-xs text-gray-700 mt-1"><strong>Sterkste stimulatie:</strong> rek maagwand + peptiden/aminozuren → gastrine + histamine.</p>
          </div>
          <div className="bg-white/70 rounded-lg p-3">
            <h4 className="font-semibold text-violet-700 text-sm">Intestinale fase</h4>
            <p className="text-xs text-gray-700 mt-1">Vooral <strong>remmend</strong> op zuursecretie.</p>
          </div>
        </div>

        <div className="bg-violet-600 text-white rounded-lg p-3 text-sm mt-4">
          <strong>Gastrine-feedback:</strong> Lage pH in antrum → D-cellen geven somatostatine af → remt G-cellen. Zo "meet" de maag of extra zuur nodig is.
        </div>
      </div>
    </section>
  );
}
