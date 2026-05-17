import SummaryLayout from '../../components/SummaryLayout'
import { Target } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-04',
    title: 'Overgewicht, BMI en reflux',
    icon: <Target className='w-4 h-4' />,
  },
]

export default function Image04OvergewichtBmiEnRefluxSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <Target className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Overgewicht, BMI en reflux</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
          <p className='text-primary-800'>Bij reflux is <strong>overgewicht</strong> een belangrijke aanwijzing. In de casus wordt de student gewogen: hij is 95,2 kg bij een lengte van 1,80 m. Dat geeft een BMI van 29,4 kg/m². Een gezond BMI ligt tussen <strong>18 en 25 kg/m²</strong>.</p>
          <p className='text-primary-800'>Je kunt het BMI grofweg zo begrijpen: het is een maat voor de verhouding tussen gewicht en lengte. In deze situatie hoort daar een gezond gewicht van ongeveer <strong>60–81 kg</strong> bij. Bij een gewicht van 81 kg zou het BMI 25 zijn. Daarom wordt een gewichtsverlies van ongeveer 14 kg genoemd, waarbij vanuit een praktisch oogpunt eerst een doel van 10 kg afvallen haalbaar en zinvol is.</p>
        </div>
        <div className='p-5 bg-amber-50 rounded-xl border border-amber-200'>
          <p className='text-amber-800 font-semibold'><strong>Waarom kan overgewicht reflux verergeren?</strong></p>
          <p className='text-amber-700'>Overgewicht, en vooral een grotere buikomvang, zorgt voor een hogere druk in de buik en dus ook op de maag. Daardoor kan maaginhoud makkelijker terugstromen naar de slokdarm. Vooral als de maag gevuld is met vetrijke voeding of eten dat lang blijft liggen, kunnen refluxklachten toenemen.</p>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <p><strong>Wat betekent dat praktisch?</strong><br />Bij iemand met reflux en overgewicht is gewichtsverlies dus een belangrijk onderdeel van de behandeling.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Overgewicht, BMI en reflux'
      description='Overgewicht, BMI en het effect van buikdruk op reflux.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-04' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
