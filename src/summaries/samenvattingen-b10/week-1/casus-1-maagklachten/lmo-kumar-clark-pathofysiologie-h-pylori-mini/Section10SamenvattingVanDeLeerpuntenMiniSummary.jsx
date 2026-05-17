import { ClipboardList } from 'lucide-react';

export default function Section10SamenvattingVanDeLeerpuntenMiniSummary() {
  return (
    <section id="sect-10" className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-slate-900 p-2 text-white">
            <ClipboardList className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Samenvatting van de leerpunten</h2>
        </div>
        <p className="leading-7 text-slate-700">De belangrijkste leerdoelen van deze stof zijn:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-700">
          <li>uitleggen hoe infectie met <em>Helicobacter pylori</em> kan leiden tot gastritis, ulcuslijden en een verhoogd risico op maligniteit;</li>
          <li>beschrijven via welke pathofysiologische mechanismen <em>H. pylori</em> de maagwand koloniseert en beschadigt.</li>
        </ul>
        <p className="mt-4 leading-7 text-slate-700">De kern van het onderwerp is het verband tussen infectie, kolonisatie van het maagslijmvlies, beschadiging van de maagwand en de klinische gevolgen daarvan. <em>H. pylori</em> kan zich in de maag handhaven, het slijmvlies aantasten en zo verschillende ziektebeelden veroorzaken, variërend van gastritis tot ulcuslijden en een verhoogd risico op maligniteit.</p>
      </div>
    </section>
  );
}
