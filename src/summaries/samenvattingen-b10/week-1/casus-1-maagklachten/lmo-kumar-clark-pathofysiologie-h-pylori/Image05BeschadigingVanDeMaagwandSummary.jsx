import SummaryLayout from '../../components/SummaryLayout'
import { Shield } from 'lucide-react'

export default function Image05BeschadigingVanDeMaagwandSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-05', title: 'Beschadiging van de maagwand', icon: <Shield className='w-4 h-4' /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title='Helicobacter pylori: kolonisatie, beschadiging en klinische gevolgen'
      description='Overzicht van de leerdoelen, pathofysiologie en klinische gevolgen van Helicobacter pylori in de maag.'
      caseLabel='Week 1 Casus 1 - Maagklachten LMO Kumar & Clark Pathofysiologie H.pylori'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori'
    >
      <section id='sect-05'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Shield className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Beschadiging van de maagwand</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4'>
            <p>Naast kolonisatie is beschadiging van de maagwand een tweede belangrijk thema. De infectie leidt namelijk niet alleen tot aanwezigheid van de bacterie, maar ook tot beschadiging van het omliggende weefsel. Daardoor ontstaat ontsteking van het maagslijmvlies en kunnen uiteindelijk ernstigere afwijkingen optreden.</p>
          </div>
          <div className='p-5 bg-amber-50 rounded-xl border border-amber-200 space-y-4'>
            <p className='text-amber-800'>De kern is dat de maagwand door <em>H. pylori</em> wordt aangetast. Dat proces is van belang omdat de maagwand normaal bescherming biedt tegen het zure milieu van de maag. Als die bescherming verstoord raakt of het slijmvlies beschadigd wordt, kunnen klachten en ziektebeelden ontstaan.</p>
          </div>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>In deze leerstof moet je dus vooral begrijpen dat de pathofysiologie draait om:</p>
            <ol className='list-decimal pl-6 space-y-1 text-primary-700 text-sm'>
              <li>vestiging van de bacterie in de maag,</li>
              <li>beschadiging van het maagslijmvlies,</li>
              <li>het ontstaan van klinische gevolgen zoals gastritis en ulcuslijden,</li>
              <li>en op langere termijn een verhoogd risico op maligniteit.</li>
            </ol>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
