import { BookOpen } from 'lucide-react';

export default function Section01SamenstellingVanHetMaagsapMiniSummary({ standalone = false }) {
  return (
    <section id='sect-01' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-primary/10 bg-primary/5 px-6 py-4'>
          <div className='rounded-xl bg-primary/10 p-2 text-primary'>
            <BookOpen className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Samenstelling van het maagsap</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De maag produceert per dag ongeveer 1,5 tot 2,5 liter maagsap met een zeer lage pH, meestal 1 tot 2,5. Dit zuur is essentieel voor de vertering, maar kan de eigen maagwand beschadigen als die niet goed beschermd is. Maagsap bevat naast zoutzuur ook pepsinogeen, pepsine en intrinsic factor. Pepsine speelt een rol bij eiwitvertering; intrinsic factor is nodig voor de opname van vitamine B12.</p>
        </div>
      </div>
    </section>
  );
}
