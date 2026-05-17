import { Flame } from 'lucide-react';

export default function Section03FunctiesVanMaagzuurMiniSummary({ standalone = false }) {
  return (
    <section id='sect-03' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-amber-100 bg-amber-50 px-6 py-4'>
          <div className='rounded-xl bg-amber-100 p-2 text-amber-700'>
            <Flame className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Functies van maagzuur</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>Maagzuur heeft meerdere functies. Het vormt een eerste verdedigingslinie tegen voedselvergiftiging: bacteriën, schimmels en veel virussen en toxines worden door de zure omgeving geïnactiveerd of gedood. Het zuur denatureert membraaneiwitten, beschadigt membranen en kan ook intracellulaire eiwitten en DNA aantasten. Sommige zuurtolerante bacteriën kunnen tijdelijk overleven doordat zij intracellulair bufferen en schade herstellen. Daarnaast denatureert maagzuur eiwitten uit voedsel, waardoor hun driedimensionale structuur verdwijnt en ze beter toegankelijk worden voor verteringsenzymen. Ook activeert het zuur pepsinogeen tot pepsine: pepsinogeen wordt in het zure milieu ontdaan van de remmende eiwitstaart, waarna pepsine ontstaat. Pepsine activeert vervolgens weer extra pepsinogeen, wat leidt tot een kettingreactie. Pepsine werkt optimaal bij een pH van ongeveer 1,5 tot 3.</p>
        </div>
      </div>
    </section>
  );
}
