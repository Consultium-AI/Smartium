import SummaryLayout from '../../components/SummaryLayout'
import { Shield } from 'lucide-react'

export default function Image08BeschermingVanDeMaagwandTegenMaagzuurSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-08', title: 'Bescherming van de maagwand tegen maagzuur', icon: <Shield className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Bescherming van de maagwand tegen maagzuur'}
      description={'Mucus, bicarbonaat en prostaglandine E2 beschermen de maagwand; NSAIDs kunnen die bescherming ondermijnen.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-08'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <Shield className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Bescherming van de maagwand tegen maagzuur</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>De maagwand wordt beschermd door een <strong>slijmlaag</strong>. Mucuscellen scheiden <strong>mucus</strong> en <strong>bicarbonaat</strong> af. Daardoor ontstaat een beschermende laag aan het oppervlak van de maagwand, zodat het maagzuur de epitheelcellen niet kan bereiken.</p>
          </div>
          <div className={'p-5 bg-teal-50 rounded-xl border border-teal-200'}>
            <p className={'text-teal-800'}><strong>Prostaglandine E2</strong> heeft een beschermende werking. Het zorgt voor:</p>
            <ul className={'list-disc pl-6 space-y-1 text-teal-700 text-sm'}>
              <li>meer <strong>mucussecretie</strong>;</li>
              <li>meer <strong>bicarbonaatsecretie</strong>;</li>
              <li>minder <strong>HCl-secretie</strong>;</li>
              <li>meer <strong>lokale doorbloeding</strong>;</li>
              <li>meer <strong>celproliferatie</strong>.</li>
            </ul>
          </div>
          <div className={'p-5 bg-amber-50 rounded-xl border border-amber-200'}>
            <p className={'text-amber-800'}><strong>NSAIDs en maagulcera</strong></p>
            <p className={'text-amber-700'}>NSAIDs kunnen maagbeschadiging veroorzaken. In het zure maaglumen worden ze geprotoneerd. Het niet-geïoniseerde NSAID kan dan de mucuscellen binnendringen. In de cel, waar de pH hoger is, wordt het weer geïoniseerd en blijft het vastzitten. Daardoor hoopt het zich op en ontstaat <strong>celschade</strong>.</p>
            <p className={'text-amber-700'}>Bovendien remmen NSAIDs de vorming van prostaglandinen via <strong>COX-1</strong>. Daardoor neemt de beschermende werking van PGE2 af. Het gevolg is minder mucus, minder bicarbonaat en minder bescherming van de maagwand. Daarom kunnen <strong>maagbeschermers</strong> nodig zijn bij gebruik van NSAIDs.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
