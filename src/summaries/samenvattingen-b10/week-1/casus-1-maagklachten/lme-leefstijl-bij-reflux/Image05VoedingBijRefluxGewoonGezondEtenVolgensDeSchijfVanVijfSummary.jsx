import SummaryLayout from '../../components/SummaryLayout'
import { ClipboardList } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-05',
    title: 'Voeding bij reflux: gewoon gezond eten volgens de Schijf van Vijf',
    icon: <ClipboardList className='w-4 h-4' />,
  },
]

export default function Image05VoedingBijRefluxGewoonGezondEtenVolgensDeSchijfVanVijfSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <ClipboardList className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Voeding bij reflux: gewoon gezond eten volgens de Schijf van Vijf</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
          <p>Voor reflux geldt in het algemeen: <strong>gezond, gevarieerd en volgens de Schijf van Vijf eten</strong>. Dat betekent dat je niet alleen kijkt naar “wel of niet eten”, maar ook naar de kwaliteit van de voeding. In de casus is duidelijk dat de student vaak buiten de deur eet, zelf niet kookt en regelmatig gebruikmaakt van snackbars. Dat past minder goed bij een voedingspatroon dat refluxklachten helpt verminderen.</p>
          <p>Een belangrijk inzicht is dat iets wat er op het eerste gezicht gezond uitziet, dat niet altijd hoeft te zijn. Een Caesar salade lijkt bijvoorbeeld relatief gezond, maar kan toch veel zout bevatten. Ook menu’s van snackbars zijn vaak minder passend bij een gezond eetpatroon.</p>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <h3 className='text-sm font-semibold text-slate-900 mb-3'>Wat adviseer je in het algemeen?</h3>
          <ul className='list-disc pl-6 space-y-1 text-slate-700 text-sm'>
            <li>voldoende groenten en fruit;</li>
            <li>passende porties;</li>
            <li>minder vetrijke en sterk bewerkte producten;</li>
            <li>een eetpatroon dat niet te zwaar op de maag ligt.</li>
          </ul>
        </div>
        <div className='p-5 bg-rose-50 rounded-xl border border-rose-200'>
          <p className='text-rose-800 font-semibold'>Supplementen zijn meestal niet nodig</p>
          <p className='text-rose-700'>In de casus geeft de moeder een pot multivitamines/mineralen mee. Toch is dat niet nodig als iemand gezond gaat eten volgens de Schijf van Vijf. Extra vitamines of mineralen zijn dan meestal overbodig. Sterker nog: <strong>extreem hoog gedoseerde supplementen kunnen een risico geven op overdosering en toxische effecten</strong>.</p>
        </div>
        <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
          <p className='text-violet-800 font-semibold'>Aandacht-vraag</p>
          <p className='text-violet-700'><strong>Wanneer zijn extra multivitamines of mineralen nodig?</strong><br />Kort antwoord: niet als iemand goed en gezond eet volgens de Schijf van Vijf; dan zijn ze meestal niet nodig.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Voeding bij reflux: gewoon gezond eten volgens de Schijf van Vijf'
      description='Voeding volgens de Schijf van Vijf en het nut van supplementen bij reflux.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-05' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
