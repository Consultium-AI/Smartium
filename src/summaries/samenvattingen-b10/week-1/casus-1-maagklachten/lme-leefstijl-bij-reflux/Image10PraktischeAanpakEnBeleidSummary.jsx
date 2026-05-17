import SummaryLayout from '../../components/SummaryLayout'
import { Shield } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-10',
    title: 'Praktische aanpak en beleid',
    icon: <Shield className='w-4 h-4' />,
  },
]

export default function Image10PraktischeAanpakEnBeleidSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <Shield className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Praktische aanpak en beleid</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
          <p>In de tweede casus wordt de patiënte opgenomen om haar diabetes beter te reguleren en de gastroparese- en refluxklachten te verminderen. Haar bloedsuikerwaarden zakken vervolgens flink. Omdat zij een traumatische ervaring heeft met een sonde, is zij sterk gemotiveerd om zo goed mogelijk zelf te blijven eten en drinken.</p>
          <p>Daarbij horen een paar praktische stappen:</p>
          <ol className='list-decimal pl-6 space-y-3 text-teal-700 text-sm'>
            <li>
              <p><strong>Reguleer eerst de ontregeling.</strong><br />De bloedsuiker moet weer onder controle komen.</p>
            </li>
            <li>
              <p><strong>Pak de gastroparese aan.</strong><br />Denk aan dieetadviezen en zo nodig medicatie die de maaglediging stimuleert, zoals prokinetica.</p>
            </li>
            <li>
              <p><strong>Schakel de diëtist in.</strong><br />Die kan helpen om de voeding aan te passen op een manier die haalbaar is voor de patiënt.</p>
            </li>
            <li>
              <p><strong>Houd rekening met psychische belasting.</strong><br />Stress, angst of een traumatische ervaring kunnen het herstel bemoeilijken. Als iemand openstaat voor begeleiding, kan ook psychologische ondersteuning helpen.</p>
            </li>
            <li>
              <p><strong>Blijf leefstijl bespreken.</strong><br />Bij reflux blijven de BRAVO-factoren belangrijk: bewegen, alcohol vermijden, voeding in balans en voldoende ontspanning. Roken is eveneens een factor om op te letten.</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Praktische aanpak en beleid'
      description='Praktische stappen bij ontregelde diabetes, gastroparese en reflux.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-10' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
