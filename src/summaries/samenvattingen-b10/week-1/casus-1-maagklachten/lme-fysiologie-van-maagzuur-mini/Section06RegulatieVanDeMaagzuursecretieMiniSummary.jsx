import { Activity } from 'lucide-react';

export default function Section06RegulatieVanDeMaagzuursecretieMiniSummary({ standalone = false }) {
  return (
    <section id='sect-06' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-violet-100 bg-violet-50 px-6 py-4'>
          <div className='rounded-xl bg-violet-100 p-2 text-violet-700'>
            <Activity className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Regulatie van de maagzuursecretie</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De maagzuursecretie wordt gereguleerd door stimulerende en remmende factoren. De belangrijkste stimulatoren zijn acetylcholine uit de nervus vagus, gastrine uit de G-cellen en histamine uit de enterochromaffine-achtige cellen (ECL-cellen). Histamine is de belangrijkste fysiologische stimulator en wordt zelf weer gestimuleerd door gastrine en acetylcholine. De belangrijkste remmer is somatostatine uit de D-cellen van het antrum. Daarnaast remmen ook PGE2, secretine, GIP en CCK de zuurproductie.</p>
        </div>
      </div>
    </section>
  );
}
