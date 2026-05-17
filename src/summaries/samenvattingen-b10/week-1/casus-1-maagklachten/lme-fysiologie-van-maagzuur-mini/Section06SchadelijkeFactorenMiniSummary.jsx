import { AlertTriangle } from 'lucide-react';

export default function Section06SchadelijkeFactorenMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl shadow p-6 border border-rose-200">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-rose-600" />
          <h2 className="text-xl font-bold text-rose-800">Schadelijke factoren: NSAIDs & H. pylori</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-rose-700 mb-2">NSAIDs</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Remmen <strong>COX-1</strong> → minder PGE2 → verminderde bescherming</li>
              <li>• In zuur maaglumen worden NSAIDs <strong>geprotoneerd</strong> → dringen cel binnen → ioniseren → stapelen op → <strong>celschade en ulceratie</strong></li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-rose-700 mb-2"><em>Helicobacter pylori</em></h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Koloniseert mucosalaag (antrum), zuurresistent door <strong>urease</strong></li>
              <li>• Tast slijmlaag aan → zuur/pepsine bereikt epitheel</li>
              <li>• Remt <strong>somatostatine</strong> (D-cellen) → minder remming op G-cellen → ↑ gastrine → ↑ zuurproductie</li>
              <li>• Gevolg: ontsteking + ulcusvorming</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
