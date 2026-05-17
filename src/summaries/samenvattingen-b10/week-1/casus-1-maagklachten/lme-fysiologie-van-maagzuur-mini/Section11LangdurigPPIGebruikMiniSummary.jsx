import { Pill } from 'lucide-react';

export default function Section11LangdurigPPIGebruikMiniSummary({ standalone = false }) {
  return (
    <section id='sect-11' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-rose-100 bg-rose-50 px-6 py-4'>
          <div className='rounded-xl bg-rose-100 p-2 text-rose-700'>
            <Pill className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Langdurig PPI-gebruik</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>Langdurig gebruik van PPI’s kan nadelen hebben, waaronder een verhoogd risico op darminfecties, bijvoorbeeld met C. difficile of resistente bacteriën, en malabsorptie van calcium, magnesium, ijzer en vitamine B12. Deze nadelen worden niet of nauwelijks gezien bij langdurig gebruik van H2-receptorantagonisten. Daarom moet bij chronisch PPI-gebruik de noodzaak regelmatig worden heroverwogen en kan afbouwen bij veel patiënten zonder duidelijke indicatie succesvol zijn.</p>
        </div>
      </div>
    </section>
  );
}
