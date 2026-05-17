import { Cpu } from 'lucide-react';

export default function Section05ParietaleCelEnHKATPaseMiniSummary({ standalone = false }) {
  return (
    <section id='sect-05' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-6 py-4'>
          <div className='rounded-xl bg-slate-100 p-2 text-slate-700'>
            <Cpu className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Pariètale cel en H+/K+-ATPase</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De pariètale cel is verantwoordelijk voor de secretie van zoutzuur. De centrale transporter is de H+/K+-ATPase in de apicale membraan. In de cel wordt koolzuur door koolzuuranhydrase gesplitst in H+ en bicarbonaat. H+ wordt via de H+/K+-pomp in ruil voor K+ naar het maaglumen getransporteerd. K+ verlaat de cel daarna weer via apicale K+-kanalen, zodat de pomp kan blijven functioneren. Bicarbonaat wordt basolateraal uitgewisseld met chloride; chloride verlaat vervolgens de cel apicaal via een chloridekanaal. In het lumen vormen H+ en Cl- samen zoutzuur. Dit proces blijft elektroneutraal.</p>
        </div>
      </div>
    </section>
  );
}
