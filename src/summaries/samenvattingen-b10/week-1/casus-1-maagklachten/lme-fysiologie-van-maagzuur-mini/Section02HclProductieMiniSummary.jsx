import { Zap } from 'lucide-react';

export default function Section02HclProductieMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow p-6 border border-teal-200">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-800">HCl-productie door de pariëtale cel</h2>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-teal-700 mb-2">Stapsgewijs mechanisme</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
            <li><strong>Koolzuuranhydrase:</strong> CO₂ + H₂O → H⁺ + HCO₃⁻ (intracellulair)</li>
            <li><strong>H⁺/K⁺-ATPase:</strong> pompt H⁺ naar lumen, K⁺ de cel in</li>
            <li>K⁺ verlaat de cel weer via <strong>K⁺-kanalen</strong> (recycling)</li>
            <li>HCO₃⁻ verlaat de cel <strong>basolateraal</strong> in ruil voor Cl⁻</li>
            <li>Cl⁻ gaat via een kanaal naar het lumen → vormt met H⁺ <strong>HCl</strong></li>
            <li>Water volgt passief via <strong>osmose</strong></li>
          </ol>
        </div>

        <div className="bg-teal-600 text-white rounded-lg p-3 text-sm">
          <strong>Kernpunt:</strong> De H⁺/K⁺-ATPase (protonpomp) is de eindstap van zuursecretie en het doelwit van PPI's.
        </div>
      </div>
    </section>
  );
}
