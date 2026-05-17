import SummaryLayout from '../../components/SummaryLayout'
import { Target } from 'lucide-react'

export default function Image07BelangrijkOmMeeTeNemenSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-07', title: 'Belangrijk om mee te nemen', icon: <Target className='w-4 h-4' /> },
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
      <section id='sect-07'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Target className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Belangrijk om mee te nemen</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>De kern van deze leerstof is compact, maar belangrijk. Je moet begrijpen dat <em>Helicobacter pylori</em>:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>zich in de maag kan koloniseren,</li>
              <li>de maagwand kan beschadigen,</li>
              <li>gastritis kan veroorzaken,</li>
              <li>kan bijdragen aan ulcuslijden,</li>
              <li>en samenhangt met een verhoogd risico op maligniteit.</li>
            </ul>
          </div>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4'>
            <p>Het onderwerp vraagt dus vooral om inzicht in het verband tussen infectie, pathofysiologie en klinische uitkomst.</p>
          </div>
          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200 space-y-2'>
            <p className='text-violet-800 font-semibold'>Aandachtsvraag: Wat is de rode draad van deze stof?</p>
            <p className='text-violet-700'>Mini-antwoord: Een <em>H. pylori</em> infectie kan de maagwand koloniseren en beschadigen, waardoor verschillende klinische beelden ontstaan.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
