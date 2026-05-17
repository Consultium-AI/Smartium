import SummaryLayout from '../../components/SummaryLayout'
import { ClipboardList } from 'lucide-react'

export default function Image01LeerdoelenSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: <ClipboardList className='w-4 h-4' /> },
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
      <section id='sect-01'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <ClipboardList className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Leerdoelen</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>In deze stof draait het om twee hoofddoelen:</p>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr>
                    <th className='text-left p-3 bg-primary-100 text-primary-800 font-semibold border border-primary-200' colSpan='1'>Tabel 1. Leerdoelen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-3 border border-primary-200 text-primary-700'>Uitleggen hoe infectie met <em>Helicobacter pylori</em> kan leiden tot verschillende klinische beelden, zoals gastritis, ulcuslijden en een verhoogd risico op maligniteit.</td>
                  </tr>
                  <tr>
                    <td className='p-3 border border-primary-200 text-primary-700'>Beschrijven via welke pathofysiologische mechanismen <em>Helicobacter pylori</em> de maagwand koloniseert en beschadigt.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
