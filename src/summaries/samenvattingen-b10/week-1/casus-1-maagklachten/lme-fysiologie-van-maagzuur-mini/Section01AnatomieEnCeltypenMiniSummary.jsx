import { Layers } from 'lucide-react';

export default function Section01AnatomieEnCeltypenMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl shadow p-6 border border-primary-200">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-6 h-6 text-primary-600" />
          <h2 className="text-xl font-bold text-primary-800">Anatomie & celtypen van de maag</h2>
        </div>

        <p className="text-gray-700 mb-4">
          De maag produceert dagelijks circa <strong>1,5–2,5 liter maagsap</strong> met een pH van 1–2,5. Dit zure milieu ondersteunt vertering, doodt ziekteverwekkers en activeert verteringsenzymen. De maag ligt tussen oesofagus en duodenum en bestaat uit <strong>fundus, corpus en antrum</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">Zuursecretie (fundus/corpus)</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Pariëtale cellen</strong> – HCl + intrinsic factor</li>
              <li>• <strong>Hoofdcellen</strong> – pepsinogeen + maaglipase</li>
              <li>• <strong>Mucuscellen</strong> – mucus + bicarbonaat</li>
              <li>• <strong>ECL-cellen</strong> – histamine</li>
            </ul>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-primary-700 mb-2">Regulatie (antrum)</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>G-cellen</strong> – gastrine (stimulerend)</li>
              <li>• <strong>D-cellen</strong> – somatostatine (remmend)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
