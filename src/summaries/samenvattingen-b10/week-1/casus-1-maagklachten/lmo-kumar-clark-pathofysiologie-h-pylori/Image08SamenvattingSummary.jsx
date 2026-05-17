import SummaryLayout from '../../components/SummaryLayout'
import { Brain } from 'lucide-react'

export default function Image08SamenvattingSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-08', title: 'Samenvatting', icon: <Brain className='w-4 h-4' /> },
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
      <section id='sect-08'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Brain className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Samenvatting</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>Deze leerstof gaat over <em>Helicobacter pylori</em> en de gevolgen van infectie van de maag. De belangrijkste leerdoelen zijn het kunnen uitleggen hoe <em>H. pylori</em> leidt tot gastritis, ulcuslijden en een verhoogd risico op maligniteit, en het kunnen beschrijven van de mechanismen waarmee de bacterie de maagwand koloniseert en beschadigt. De kern is dus het verband tussen kolonisatie, slijmvliesbeschadiging en klinische ziektebeelden.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
