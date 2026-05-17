import { Baby } from 'lucide-react';

export default function Section02LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-02" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-teal-100 bg-teal-50 px-5 py-4">
          <div className="rounded-xl bg-teal-600 p-2 text-white">
            <Baby className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Waarom komt reflux vaak voor bij zuigelingen?</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>Reflux komt bij zuigelingen zo vaak voor omdat meerdere beschermende mechanismen nog onrijp zijn. De slokdarm is relatief kort, de voeding is vloeibaar, baby’s liggen veel horizontaal, de basale druk van de onderste slokdarmsfincter (LES) is lager en huilen verhoogt de intra-abdominale druk. De LES is geen echte anatomische ring, maar een hoge-drukzone die terugstromen van maaginhoud normaal tegenhoudt. Beschermende mechanismen tegen reflux zijn tonische LES-contractie, de crura van het diafragma als externe sfinctercomponent, de acute hoek van His, oesofageale klaring door secundaire peristaltiek, speeksel dat zuur neutraliseert en snelle maaglediging. Bij zuigelingen zijn deze mechanismen nog onrijp. Naarmate kinderen ouder worden, neemt fysiologische reflux af door verbetering van de LES en oesofagusmotiliteit, meer vaste voeding en minder tijd in liggende houding.</p>
        </div>
      </div>
    </section>
  );
}
