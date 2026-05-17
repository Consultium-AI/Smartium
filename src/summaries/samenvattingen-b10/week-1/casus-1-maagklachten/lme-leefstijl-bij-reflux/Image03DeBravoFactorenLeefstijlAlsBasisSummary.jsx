import SummaryLayout from '../../components/SummaryLayout'
import { Layers } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-03',
    title: 'De BRAVO-factoren: leefstijl als basis',
    icon: <Layers className='w-4 h-4' />,
  },
]

export default function Image03DeBravoFactorenLeefstijlAlsBasisSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <Layers className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>De BRAVO-factoren: leefstijl als basis</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
          <p className='text-primary-800'>Bij reflux spelen de zogeheten <strong>BRAVO-factoren</strong> een centrale rol. Dat zijn leefstijlfactoren die invloed kunnen hebben op klachten:</p>
          <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
            <li><strong>B</strong>: bewegen</li>
            <li><strong>R</strong>: roken</li>
            <li><strong>A</strong>: alcohol &amp; drugs</li>
            <li><strong>V</strong>: voeding</li>
            <li><strong>O</strong>: ontspanning</li>
          </ul>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <h3 className='text-sm font-semibold text-slate-900 mb-3'>Tabel 1. BRAVO-factoren en hun betekenis bij reflux</h3>
          <div className='overflow-hidden rounded-xl border border-slate-200 bg-white'>
            <table className='w-full text-sm border-collapse'>
              <thead className='bg-slate-100'>
                <tr>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Factor</th>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Waar let je op?</th>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Voorbeeld uit de casus</th>
                </tr>
              </thead>
              <tbody>
                <tr className='align-top'>
                  <td className='border-b border-slate-200 px-4 py-3'>Bewegen</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Voldoende lichamelijke activiteit helpt mee aan een gezondere leefstijl</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Minder sporten, bijvoorbeeld niet meer voetballen</td>
                </tr>
                <tr className='align-top bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Roken</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Roken kan refluxklachten veroorzaken of verergeren</td>
                  <td className='border-b border-slate-200 px-4 py-3'>In deze casus niet aanwezig, maar wel belangrijk in het algemeen</td>
                </tr>
                <tr className='align-top'>
                  <td className='border-b border-slate-200 px-4 py-3'>Alcohol &amp; drugs</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Alcohol kan klachten verergeren</td>
                  <td className='border-b border-slate-200 px-4 py-3'>In het weekend bier drinken</td>
                </tr>
                <tr className='align-top bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Voeding</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Ongezonde voeding en grotere maaltijden kunnen reflux bevorderen</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Ongezond eten, snackbarvoeding</td>
                </tr>
                <tr className='align-top'>
                  <td className='px-4 py-3'>Ontspanning</td>
                  <td className='px-4 py-3'>Stress en onvoldoende ontspanning kunnen klachten in stand houden</td>
                  <td className='px-4 py-3'>Veel ballen in de lucht, stress door studie en ouders, slechte studieresultaten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <p>Bij de student uit de eerste casus sluiten meerdere leefstijlfactoren niet goed aan bij wat wenselijk is. Er is sprake van weinig beweging, alcoholgebruik, ongezonde voeding en weinig ontspanning. Dat maakt het aannemelijk dat leefstijl een belangrijke rol speelt bij de refluxklachten.</p>
        </div>
        <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
          <p className='text-violet-800 font-semibold'>Aandacht-vraag</p>
          <p className='text-violet-700'><strong>Welke BRAVO-factoren blijken in deze situatie vooral belangrijk?</strong><br />Kort antwoord: vooral bewegen, alcohol, voeding en ontspanning.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='De BRAVO-factoren: leefstijl als basis'
      description='De BRAVO-factoren als basis voor leefstijladvies bij reflux.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-03' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
