import { Clock3 } from 'lucide-react';

export default function Section07CefaleGastrischeEnIntestinaleFaseMiniSummary({ standalone = false }) {
  return (
    <section id='sect-07' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-cyan-100 bg-cyan-50 px-6 py-4'>
          <div className='rounded-xl bg-cyan-100 p-2 text-cyan-700'>
            <Clock3 className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Cefale, gastrische en intestinale fase</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De maagzuursecretie verloopt in drie fasen. In de cefale fase wordt de maag al vóór aankomst van voedsel geactiveerd door zien, ruiken, proeven, kauwen en slikken; dit gebeurt via de nervus vagus. De gastrische fase is de belangrijkste fase: uitrekking van de maagwand en aanwezigheid van peptiden en aminozuren stimuleren de zuurproductie sterk. De intestinale fase geeft in de dunne darm nog enige stimulatie, maar vooral remming door onder andere zuur en vet. Vooral in de gastrische fase wordt de productie aangepast aan de behoefte. Rek van de maagwand activeert een vago-vagale reflex, waardoor G-cellen, ECL-cellen en pariètale cellen worden gestimuleerd. Als de luminale pH in het antrum te laag wordt, geven D-cellen somatostatine af, wat de G-cellen en pariètale cel remt en zo overmatige zuurproductie voorkomt.</p>
        </div>
      </div>
    </section>
  );
}
