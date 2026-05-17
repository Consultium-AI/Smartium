import SummaryLayout from '../../components/SummaryLayout'
import { Stethoscope } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-07',
    title: 'Diabetische gastroparese: vertraagde maagontlediging',
    icon: <Stethoscope className='w-4 h-4' />,
  },
]

export default function Image07DiabetischeGastropareseVertraagdeMaagontledigingSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <Stethoscope className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Diabetische gastroparese: vertraagde maagontlediging</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-amber-50 rounded-xl border border-amber-200'>
          <p>Bij de tweede casus speelt een andere belangrijke oorzaak van refluxachtige klachten: <strong>gastroparese</strong>. Gastroparese betekent <strong>vertraagde maagontlediging</strong>. De maag werkt dan trager, waardoor voedsel langer in de maag blijft.</p>
          <ul className='list-disc pl-6 space-y-1 text-amber-700 text-sm'>
            <li>misselijkheid;</li>
            <li>braken;</li>
            <li>een vol gevoel in de maag;</li>
            <li>pijn bij eten of drinken;</li>
            <li>refluxklachten of zuurbranden.</li>
          </ul>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <h3 className='text-sm font-semibold text-slate-900 mb-3'>Tabel 2. Klachten en hun mogelijke betekenis bij de patiënte met ontregelde diabetes</h3>
          <div className='overflow-hidden rounded-xl border border-slate-200 bg-white'>
            <table className='w-full text-sm border-collapse'>
              <thead className='bg-slate-100'>
                <tr>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Klacht of aanwijzing</th>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Past vooral bij</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Bloedsuiker &gt; 25 mmol/l</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Metabole ontregeling</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Niet goed innemen van medicatie</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Metabole ontregeling</td>
                </tr>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Veel dorst</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Metabole ontregeling</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Misselijkheid en braken</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Gastroparese of refluxoesofagitis</td>
                </tr>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Pijn bij eten en drinken</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Refluxoesofagitis</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Vol gevoel in de maag</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Gastroparese</td>
                </tr>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Traumatische ervaring met sonde</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Psychische belasting</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Stress door dreigend ontslag</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Psychische belasting</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>Eten en drinken lukt niet meer</td>
                  <td className='px-4 py-3'>Zowel lichamelijke als psychische factoren kunnen meespelen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <p>De klachten in deze casus passen niet bij één enkele oorzaak, maar bij een combinatie van factoren. Toch wordt vooral de <strong>metabole ontregeling door stress en onvoldoende medicatie-inname</strong> als belangrijke oorzaak gezien. De hoge bloedsuiker, dorst en misselijkheid horen daar goed bij. Tegelijk kan de verstoorde diabetesregeling de maagontlediging vertragen en zo reflux en refluxoesofagitis uitlokken.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Diabetische gastroparese: vertraagde maagontlediging'
      description='Gastroparese als oorzaak van vertraagde maagontlediging en refluxklachten.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-07' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
