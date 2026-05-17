import { Pill } from 'lucide-react';

export default function Section08MaagzuurremmersMiniSummary({ standalone = false }) {
  return (
    <section id='sect-08' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-primary/10 bg-primary/5 px-6 py-4'>
          <div className='rounded-xl bg-primary/10 p-2 text-primary'>
            <Pill className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Maagzuurremmers</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>Maagzuurremmers bestaan vooral uit H2-receptorantagonisten en protonpompremmers (PPI’s). H2-antagonisten remmen de H2-receptor op de pariètale cel via de basolaterale zijde en onderdrukken zo de histaminesignaalroute. Ze zijn ineffectief in de cefale fase en hebben ook invloed op de intrinsic factor-secretie. PPI’s, zoals omeprazol, remmen direct de H+/K+-ATPase via de apicale zijde. Het zijn prodrugs die pas actief worden in het zure milieu van de secretoire vesikels van de pariètale cel. Daardoor werken ze krachtig, ook in de cefale fase, maar ze hebben niet of nauwelijks effect op de intrinsic factor-secretie. Nieuwe protonpompen moeten worden aangemaakt voordat de zuursecretie herstelt.</p>
        </div>
      </div>
    </section>
  );
}
