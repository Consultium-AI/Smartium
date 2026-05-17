import SummaryLayout from '../../components/SummaryLayout'
import { AlertTriangle } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-08',
    title: 'Ernst van de diabetische ontregeling',
    icon: <AlertTriangle className='w-4 h-4' />,
  },
]

export default function Image08ErnstVanDeDiabetischeOntregelingSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <AlertTriangle className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Ernst van de diabetische ontregeling</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-rose-50 rounded-xl border border-rose-200'>
          <p>Bij een ontregelde diabetes is het belangrijk om de ernst vast te stellen, omdat dat bepaalt welke vervolgstappen nodig zijn. In de casus met de patiënte van 56 jaar is de bloedsuiker erg hoog en is zij sinds die ochtend aan het braken. Dat valt in de categorie <strong>ernstig</strong>. Als zij langer dan 4 uur zou blijven braken, dan zou de situatie in de categorie <strong>zeer ernstig</strong> vallen.</p>
          <p>Dat onderscheid is belangrijk, omdat je dan weet hoe spoedig verdere actie nodig is.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Ernst van de diabetische ontregeling'
      description='De ernst van diabetische ontregeling en de betekenis voor vervolgstappen.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-08' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
