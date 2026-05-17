import SummaryLayout from '../../components/SummaryLayout'
import { HeartPulse } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-02',
    title: 'Refluxklachten: van onschuldig tot relevant',
    icon: <HeartPulse className='w-4 h-4' />,
  },
]

export default function Image02RefluxklachtenVanOnschuldigTotRelevantSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <HeartPulse className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Refluxklachten: van onschuldig tot relevant</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <p>Refluxklachten bij volwassenen kunnen sterk verschillen. Soms gaat het om simpele, hinderlijke zuurbranden, maar soms zijn de klachten een uiting van een onderliggende medische situatie. Daarom is het belangrijk om niet alleen naar de klacht zelf te kijken, maar ook naar het verhaal eromheen: leefstijl, gewicht, voeding, stress en eventuele andere aandoeningen.</p>
          <p>Een belangrijke eerste stap is dus steeds: <strong>past dit bij leefstijlgerelateerde reflux, of zijn er aanwijzingen dat er meer aan de hand is?</strong> Bij refluxklachten is het bovendien nuttig om te bedenken dat behandeling niet altijd meteen medicamenteus hoeft te zijn. Vaak kun je al veel bereiken met leefstijladviezen. Als klachten ondanks die adviezen blijven bestaan, kun je samen met de patiënt verder kijken naar medicamenteuze behandeling.</p>
        </div>
        <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
          <p className='text-violet-800 font-semibold'>Aandacht-vraag</p>
          <p className='text-violet-700'><strong>Wat is het idee achter de eerste aanpak van refluxklachten?</strong><br />Kort antwoord: eerst kijken of leefstijl de klachten kan verminderen, en pas daarna zo nodig verder behandelen.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Refluxklachten: van onschuldig tot relevant'
      description='Refluxklachten bekijken in relatie tot leefstijl en mogelijke medische oorzaken.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-02' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
