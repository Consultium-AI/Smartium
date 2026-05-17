import { Droplets } from 'lucide-react';

export default function Section04VetverteringEnVitamineB12MiniSummary({ standalone = false }) {
  return (
    <section id='sect-04' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-rose-100 bg-rose-50 px-6 py-4'>
          <div className='rounded-xl bg-rose-100 p-2 text-rose-700'>
            <Droplets className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Vetvertering en vitamine B12</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>Verder speelt maagzuur een rol bij vetvertering via maaglipase, dat door de hoofdcellen wordt uitgescheiden. Dit enzym splitst triglyceriden in vetzuren en diglyceriden. Bij pasgeborenen is dit belangrijk voor melkvetvertering; bij volwassenen draagt het vooral bij aan de vorming van vetzuren die signalen geven voor hormoonsynthese en het openen van de pylorus. Ook is maagzuur belangrijk voor vitamine B12. Cobalamine uit de voeding zit gebonden aan eiwit; zuur en pepsine maken B12 hiervan los. Daarna bindt B12 aan haptocorrin, een beschermend eiwit uit speeksel en maag. In het duodenum wordt haptocorrin afgebroken, waarna B12 aan intrinsic factor kan binden. Dit complex wordt uiteindelijk in het ileum opgenomen.</p>
        </div>
      </div>
    </section>
  );
}
