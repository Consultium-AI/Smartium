import { Search } from 'lucide-react';

export default function Section07BelangVanKolonisatieMiniSummary() {
  return (
    <section id="sect-07" className="scroll-mt-24">
      <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-teal-700 p-2 text-white">
            <Search className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Belang van kolonisatie</h2>
        </div>
        <p className="leading-7 text-slate-700">Kolonisatie betekent dat een micro-organisme zich kan vestigen en in stand houden op een bepaalde plaats in het lichaam. In deze stof is dat de maagwand. Dit is belangrijk omdat <em>H. pylori</em> alleen schade kan aanrichten als de bacterie zich in de maag kan handhaven. De aanwezigheid van de bacterie is dus niet toevallig; zij is een voorwaarde voor het ontstaan van ontsteking en beschadiging.</p>
        <p className="mt-4 leading-7 text-slate-700">De nadruk ligt daarbij op het proces waarmee <em>H. pylori</em> in de maag aanwezig blijft en het slijmvlies aantast. De bacterie moet eerst de maagomgeving overleven en vervolgens invloed uitoefenen op het maagslijmvlies. Dat is de basis van de pathofysiologische mechanismen die in deze leerstof centraal staan.</p>
      </div>
    </section>
  );
}
