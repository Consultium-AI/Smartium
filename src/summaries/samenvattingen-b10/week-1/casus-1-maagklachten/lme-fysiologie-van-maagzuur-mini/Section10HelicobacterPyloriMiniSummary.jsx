import { AlertTriangle } from 'lucide-react';

export default function Section10HelicobacterPyloriMiniSummary({ standalone = false }) {
  return (
    <section id='sect-10' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-amber-100 bg-amber-50 px-6 py-4'>
          <div className='rounded-xl bg-amber-100 p-2 text-amber-700'>
            <AlertTriangle className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Helicobacter pylori</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>Helicobacter pylori kan de mucosalaag aantasten. De bacterie is zuurbestendig door ureaseproductie en hecht vooral in het antrum aan de epitheelcellen. Door kolonisatie raakt de beschermende laag beschadigd, waardoor zuur en pepsine het epitheel bereiken en lokale schade en ontsteking veroorzaken, met maagzweren als gevolg. Bij chronische infectie kan de maagzuurproductie toenemen doordat de remming wegvalt. Dit verloopt via remming van somatostatine-afgifte door D-cellen, waardoor minder remming op G-cellen ontstaat, meer gastrine vrijkomt, de pariètale cellen sterker worden gestimuleerd en meer zuur wordt gevormd, met meer epitheelbeschadiging en klachten tot gevolg.</p>
        </div>
      </div>
    </section>
  );
}
