import { Shield } from 'lucide-react';

export default function Section09SlijmlaagEnProstaglandinenMiniSummary({ standalone = false }) {
  return (
    <section id='sect-09' className='scroll-mt-24'>
      <div className='overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm'>
        <div className='flex items-start gap-3 border-b border-teal-100 bg-teal-50 px-6 py-4'>
          <div className='rounded-xl bg-teal-100 p-2 text-teal-700'>
            <Shield className='h-5 w-5' />
          </div>
          <div>
            <h2 className='text-xl font-semibold text-slate-900'>Slijmlaag en prostaglandinen</h2>
          </div>
        </div>
        <div className='space-y-4 px-6 py-5 text-sm leading-7 text-slate-700'>
          <p>De maag wordt beschermd door een slijmlaag. Mucuscellen scheiden mucus en bicarbonaat af, waardoor een beschermende laag ontstaat tussen luminale zuur en het epitheel. Prostaglandine E2 versterkt deze bescherming door meer mucus- en bicarbonaatsecretie, minder HCl-secretie, meer doorbloeding en meer celproliferatie. NSAIDs kunnen maagbeschadiging veroorzaken doordat zij in het zure lumen worden geprotoneerd, de mucuscellen binnendringen en daar weer ioniseren, waardoor zij zich ophopen en celschade geven. Daarnaast remmen NSAIDs via COX-1 de prostaglandinesynthese, waardoor de beschermende werking van PGE2 afneemt. Dit leidt tot minder mucus, minder bicarbonaat en een kwetsbaardere maagwand, zodat maagbeschermers nodig kunnen zijn.</p>
        </div>
      </div>
    </section>
  );
}
