import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-11',
    title: 'Samenvatting',
    icon: <BookOpen className='w-4 h-4' />,
  },
]

export default function Image11SamenvattingSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <BookOpen className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Samenvatting</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
          <p className='text-primary-800'>Refluxklachten kunnen een onschuldige leefstijlcomponent hebben, maar kunnen ook passen bij een onderliggende aandoening. Bij de eerste casus spelen meerdere BRAVO-factoren mee: te weinig beweging, alcohol, ongezonde voeding, overgewicht en stress. Gezonde voeding volgens de Schijf van Vijf, gewichtsverlies en aandacht voor ontspanning zijn dan belangrijke adviezen. Supplementen zijn meestal niet nodig als iemand gezond eet.</p>
          <p className='text-primary-800'>Bij de tweede casus laat de combinatie van hoge bloedsuiker, braken, dorst en klachten bij eten en drinken zien dat er meer speelt dan alleen reflux. Hier is sprake van ontregelde diabetes met gastroparese en refluxklachten. Dan zijn behandeling van de ontregeling, dieetadvies, zo nodig prokinetica en begeleiding door een diëtist belangrijk.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Samenvatting'
      description='Kernsamenvatting van leefstijl, reflux en gastroparese.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-11' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
