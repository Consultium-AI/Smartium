import { LayoutGrid } from 'lucide-react';

export default function Section02AnatomieEnCelopbouwVanDeMaagMiniSummary({ standalone = false }) {
  return (
    <section id='sect-02' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-teal-100 bg-teal-50 px-6 py-4'>
          <div className='rounded-xl bg-teal-100 p-2 text-teal-700'>
            <LayoutGrid className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Anatomie en celopbouw van de maag</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De maag ligt tussen oesofagus en duodenum en wordt functioneel verdeeld in fundus, corpus en antrum. De maagwand bestaat uit mucosa met maagklieren en daarbuiten meerdere spierlagen die zorgen voor malen en kneden van de maaginhoud. In de fundus en het corpus wordt vooral maagsap geproduceerd, terwijl in het antrum vooral hormoonproducerende cellen zitten die de zuurproductie regelen. De verschillende epitheel- en kliercellen ontstaan uit stamcellen in de hals van de maagklieren, de zogenoemde progenitor zone.</p>
        </div>
      </div>
    </section>
  );
}
