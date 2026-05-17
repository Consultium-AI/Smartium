import { Milk } from 'lucide-react';

export default function Section06LmeRefluxBijKinderenMiniSummary() {
  return (
    <section id="sect-06" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm">
        <div className="flex items-start gap-3 border-b border-violet-100 bg-violet-50 px-5 py-4">
          <div className="rounded-xl bg-violet-600 p-2 text-white">
            <Milk className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Praktische adviezen en koemelkallergie</h2>
          </div>
        </div>
        <div className="space-y-4 px-5 py-5 leading-7 text-slate-700">
          <p>Bij zuigelingen met refluxklachten zonder alarmsignalen zijn vooral praktische adviezen belangrijk: breng het flesvolume terug naar normale hoeveelheden, voorkom overvoeding, let op de houding tijdens en na de voeding, laat het kind tussendoor goed boeren en geef ouders uitleg en geruststelling. Zo nodig kan de voeding worden ingedikt, bijvoorbeeld met johannesbroodpitmeel of een kunstvoeding waarin dit al zit. Het maakt niet uit wie de fles geeft, zolang de techniek goed is. “Vaker een fles geven” is niet automatisch beter; een te kleine hoeveelheid per voeding kan juist ervoor zorgen dat de totale inname te laag blijft.</p>
          <p>Bij borstgevoede zuigelingen waarbij koemelkallergie vermoed wordt, kan eliminatie van koemelk uit de maternale voeding een rol spelen. Als klachten tijdens afbouwen terugkomen, is verdere evaluatie nodig. Koemelkallergie is een belangrijke onderliggende oorzaak die refluxachtige klachten kan verergeren, samen met ontroostbaarheid en slecht groeien. Als een kind duidelijke distress na voedingen heeft of onvoldoende groeit, moet je dus niet alleen aan “meer reflux” denken, maar ook aan een onderliggende aandoening.</p>
        </div>
      </div>
    </section>
  );
}
