import SummaryLayout from '../../components/SummaryLayout'
import { AlertTriangle } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-05', title: 'Red flags: wanneer moet je verder denken dan reflux?', icon: AlertTriangle },
]

export default function Image05RedFlagsWanneerMoetJeVerderDenkenDanRefluxSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Red flags: wanneer moet je verder denken dan reflux?'
      description='Red flags bij braken en refluxklachten en de gerichte anamnese die daarbij hoort.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-05' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <AlertTriangle className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Red flags: wanneer moet je verder denken dan reflux?</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-amber-50 rounded-xl border border-amber-200'>
            <p className='text-amber-800'>Bij (recidiverend) braken is het heel belangrijk om <strong>red flags</strong> te herkennen. Dan kan er direct beleid nodig zijn, of zelfs spoedhandeling. De differentiaaldiagnose van braken bij kinderen is breed, en de oorzaak hangt ook af van de leeftijd.</p>
          </div>

          <div className='p-5 bg-amber-50 rounded-xl border border-amber-200'>
            <p className='font-semibold text-amber-900 mb-3'>Tabel 3. Red flags bij kinderen met reflux- of braakklachten</p>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse bg-white rounded-lg overflow-hidden'>
                <thead>
                  <tr className='bg-amber-100'>
                    <th className='border border-amber-200 px-3 py-2 text-left font-semibold text-amber-900'>Groep</th>
                    <th className='border border-amber-200 px-3 py-2 text-left font-semibold text-amber-900'>Red flags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-amber-200 px-3 py-2 align-top'><strong>Algemeen</strong></td>
                    <td className='border border-amber-200 px-3 py-2 align-top'>gewichtsverlies/onvoldoende groei, lethargie, koorts, extreem geprikkeld/pijnlijk, dysurie, start van klachten &gt; 6 maanden of persisterende klachten na 12-18 maanden</td>
                  </tr>
                  <tr className='bg-amber-50'>
                    <td className='border border-amber-200 px-3 py-2 align-top'><strong>Neurologisch</strong></td>
                    <td className='border border-amber-200 px-3 py-2 align-top'>bombende fontanel, snel groeiende schedelomtrek, insulten, macro-/microcefalie</td>
                  </tr>
                  <tr>
                    <td className='border border-amber-200 px-3 py-2 align-top'><strong>Gastro-intestinaal</strong></td>
                    <td className='border border-amber-200 px-3 py-2 align-top'>persisterend braken met grote kracht, nachtelijk braken, galbraken, hematemesis, chronische diarree, rectaal bloedverlies, abdominale distensie</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Het is belangrijk om in de anamnese gericht te vragen naar onderscheidende onderdelen:</p>
            <ul className='list-disc pl-6 space-y-1 text-slate-700 text-sm'>
              <li>alarmsymptomen;</li>
              <li>voeding, en dan <strong>gedetailleerd</strong>;</li>
              <li>buikpijn;</li>
              <li>ontlasting;</li>
              <li>koorts;</li>
              <li>groei;</li>
              <li>aspect van het braaksel;</li>
              <li>voorgeschiedenis, bijvoorbeeld een buikoperatie;</li>
              <li>familieanamnese, zoals coeliakie, IBD of migraine.</li>
            </ul>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Door deze vragen kun je beter bepalen of het om een gewone reflux gaat of om iets anders.</p>
            <p>Klinisch gezien is dit belangrijk, omdat refluxklachten soms eigenlijk passen bij een andere aandoening, zoals bijvoorbeeld een voedselallergie of een obstructie.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}
