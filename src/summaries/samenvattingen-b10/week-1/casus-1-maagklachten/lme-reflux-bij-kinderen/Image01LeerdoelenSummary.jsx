import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
]

export default function Image01LeerdoelenSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Leerdoelen'
      description='Leerdoelen over reflux bij kinderen, alarmsignalen en eerste beleid.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-01' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <BookOpen className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Leerdoelen</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>Na het doornemen van deze stof kun je:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>het verschil benoemen tussen regurgitatie, gastro-intestinale reflux, refluxziekte, braken en ruminatie;</li>
              <li>refluxklachten bij kinderen herkennen;</li>
              <li>de verschillende onderliggende oorzaken noemen die aan refluxklachten bij kinderen ten grondslag kunnen liggen;</li>
              <li>de <strong>red flags</strong> in het kader van reflux herkennen;</li>
              <li>een eerste behandelplan opstellen voor refluxklachten bij kinderen.</li>
            </ul>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}
