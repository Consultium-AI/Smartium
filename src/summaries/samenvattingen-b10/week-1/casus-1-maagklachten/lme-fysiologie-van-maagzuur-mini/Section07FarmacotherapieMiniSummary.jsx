import { Pill } from 'lucide-react';

export default function Section07FarmacotherapieMiniSummary({ id, standalone = false }) {
  return (
    <section id={id} className={standalone ? 'scroll-mt-24' : undefined}>
      <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow p-6 border border-teal-200">
        <div className="flex items-center gap-3 mb-4">
          <Pill className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-800">Zollinger-Ellison, vagotomie & farmacotherapie</h2>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-teal-700 mb-2">Zollinger-Ellison-syndroom</h3>
          <p className="text-sm text-gray-700">
            Tumoren (dunne darm/pancreas) produceren continu <strong>gastrine</strong> → maag-pH ook bij lege maag al laag → sterk verhoogde basale zuurproductie → duodenumschade en ulcera.
          </p>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-teal-700 mb-2">Vagotomie</h3>
          <p className="text-sm text-gray-700">
            Doorsnijden vagale stimulatie → minder acetylcholine → verminderde stimulatie ECL-cellen en pariëtale cellen → minder zuurproductie. Vroeger toegepast bij maagzweren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-teal-700 mb-2">H2-receptorantagonisten</h3>
            <p className="text-sm text-gray-700">Blokkeren H2-receptor aan <strong>basolaterale zijde</strong> van pariëtale cel → minder histamine-gestimuleerde zuursecretie. Minder bijwerkingen bij langdurig gebruik.</p>
          </div>
          <div className="bg-white/70 rounded-lg p-4">
            <h3 className="font-semibold text-teal-700 mb-2">PPI's (bv. omeprazol)</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Prodrug</strong>: passeert membranen → geprotoneerd in zure pariëtale cel → actief</li>
              <li>• Bindt via <strong>zwavelbrug</strong> aan H⁺/K⁺-ATPase → <strong>irreversibele</strong> inactivatie</li>
              <li>• Herstel pas na aanmaak nieuwe pompen</li>
              <li>• Werkt langdurig, ook in cefale fase</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-100 border border-rose-300 rounded-lg p-3 text-sm text-rose-800 mt-4">
          <strong>Let op langdurig PPI-gebruik:</strong> verhoogd risico op darminfecties (C. difficile), malabsorptie van calcium, magnesium, ijzer en vitamine B12. Bij H2-antagonisten veel minder gezien.
        </div>
      </div>
    </section>
  );
}
