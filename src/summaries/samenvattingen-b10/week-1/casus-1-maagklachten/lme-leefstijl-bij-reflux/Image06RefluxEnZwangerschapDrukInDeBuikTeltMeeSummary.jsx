import SummaryLayout from '../../components/SummaryLayout'
import { HeartPulse } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-06',
    title: 'Reflux en zwangerschap: druk in de buik telt mee',
    icon: <HeartPulse className='w-4 h-4' />,
  },
]

export default function Image06RefluxEnZwangerschapDrukInDeBuikTeltMeeSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <HeartPulse className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Reflux en zwangerschap: druk in de buik telt mee</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
          <p>Reflux kan ook ontstaan of verergeren door situaties waarin de druk in de buik toeneemt. Zwangerschap is daar een duidelijk voorbeeld van. In het begin van de zwangerschap spelen hormonen mee: de stijging van progesteron zorgt voor minder spierspanning in glad spierweefsel. Daardoor sluit de onderste slokdarmsfincter minder strak, leegt de maag langzamer en kan obstipatie optreden. Later in de zwangerschap komt daar ook de toenemende buikdruk bij, waardoor maaginhoud gemakkelijker terug omhoog komt.</p>
          <p>Dat laat zien dat reflux niet alleen met eten of gewicht te maken heeft, maar ook met de lichamelijke omstandigheden waarin de maag en slokdarm werken.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Reflux en zwangerschap: druk in de buik telt mee'
      description='Reflux tijdens zwangerschap en de rol van buikdruk en hormonen.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-06' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
