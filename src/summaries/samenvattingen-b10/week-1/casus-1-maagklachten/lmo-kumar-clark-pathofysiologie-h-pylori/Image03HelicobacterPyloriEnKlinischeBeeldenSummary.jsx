import SummaryLayout from '../../components/SummaryLayout'
import { Activity } from 'lucide-react'

export default function Image03HelicobacterPyloriEnKlinischeBeeldenSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-03', title: 'Helicobacter pylori en klinische beelden', icon: <Activity className='w-4 h-4' /> },
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
      <section id='sect-03'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Activity className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Helicobacter pylori en klinische beelden</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>Een infectie met <em>H. pylori</em> kan verschillende klinische beelden veroorzaken. De kern daarvan is dat de bacterie de maagwand beïnvloedt en daardoor ontsteking en schade kan veroorzaken. De belangrijkste uitkomsten die je moet kennen zijn:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>gastritis</li>
              <li>ulcuslijden</li>
              <li>verhoogd risico op maligniteit</li>
            </ul>
          </div>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4'>
            <p>Deze drie uitkomsten horen bij elkaar in de zin dat ze allemaal kunnen voortkomen uit een aanhoudende infectie en beschadiging van het maagslijmvlies. Gastritis is hierbij de ontstekingsreactie van het maagslijmvlies. Ulcuslijden betekent dat er een zweer ontstaat. Het verhoogde risico op maligniteit laat zien dat langdurige infectie en chronische beschadiging van de maagwand ook op langere termijn gevolgen kan hebben.</p>
          </div>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr>
                  <th className='text-left p-3 bg-slate-100 text-slate-800 font-semibold border border-slate-200' colSpan='2'>Tabel 2. Klinische gevolgen van <em>H. pylori</em> infectie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Gastritis</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Ontsteking van het maagslijmvlies</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Ulcuslijden</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Vorming van een zweer in het maag-darmgebied</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Verhoogd risico op maligniteit</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Langdurige infectie hangt samen met een groter risico op kwaadaardige afwijkingen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>De belangrijke gedachte is dus: een infectie blijft niet beperkt tot de aanwezigheid van een bacterie, maar kan uitmonden in ontsteking, weefselschade en ernstigere ziektebeelden.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
