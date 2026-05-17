import SummaryLayout from '../../components/SummaryLayout'
import { HeartPulse } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-04', title: 'Wanneer denk je aan refluxziekte?', icon: HeartPulse },
]

export default function Image04WanneerDenkJeAanRefluxziekteSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Wanneer denk je aan refluxziekte?'
      description='Klachten en signalen die passen bij GORZ en het onderscheid met gewone reflux.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-04' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <HeartPulse className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Wanneer denk je aan refluxziekte?</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>
              Niet elke baby die spuugt heeft refluxziekte. Het gaat vooral om de vraag of de klachten <strong>hinderlijk</strong> zijn of <strong>complicaties</strong> geven. Dan spreken we van GORZ.
            </p>
          </div>

          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p className='font-semibold text-teal-900 mb-3'>Tabel 2. Symptomen en signalen van GORZ bij kinderen</p>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse bg-white rounded-lg overflow-hidden'>
                <thead>
                  <tr className='bg-teal-100'>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Categorie</th>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Klachten/signalen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Algemeen</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>anemie, dystonische nek (Sandifer-syndroom), gewichtsverlies of achterblijvende groei, ontroostbaar huilen, overstrekken, prikkelbaarheid/pijn, tanderosie, voedselweigering</td>
                  </tr>
                  <tr className='bg-teal-50'>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Luchtwegen</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>apneus, apparent life-threatening events, astma, hoesten, heesheid, piepende ademhaling, recidiverende luchtweginfecties, recidiverende otitiden, stridor</td>
                  </tr>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Gastro-intestinaal</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Barrett’s oesofagus, dysfagie, hematemesis, oesofagitis, pijn in epigastrio, regurgiteren/spugen, strictuur, zuurbranden/pijn op de borst</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>
              De diagnose wordt gemaakt op basis van de <strong>anamnese</strong> en het <strong>uitsluiten van alarmsymptomen</strong>. Het onderscheid tussen GOR en GORZ kan soms lastig zijn.
            </p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}
