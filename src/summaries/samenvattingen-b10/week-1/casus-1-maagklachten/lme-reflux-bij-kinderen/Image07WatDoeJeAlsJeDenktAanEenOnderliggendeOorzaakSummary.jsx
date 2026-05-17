import SummaryLayout from '../../components/SummaryLayout'
import { Beaker } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-07', title: 'Wat doe je als je denkt aan een onderliggende oorzaak?', icon: Beaker },
]

export default function Image07WatDoeJeAlsJeDenktAanEenOnderliggendeOorzaakSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Wat doe je als je denkt aan een onderliggende oorzaak?'
      description='Wanneer refluxklachten kunnen passen bij een onderliggende aandoening, zoals koemelkallergie.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-07' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Beaker className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Wat doe je als je denkt aan een onderliggende oorzaak?</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p>Soms zijn refluxklachten niet gewoon functioneel, maar wordt reflux verergerd door een onderliggende aandoening. Een belangrijke mogelijke factor is <strong>koemelkallergie</strong>. Dat kan bijdragen aan meer klachten, ontroostbaarheid en slecht groeien. In zo’n geval denk je niet alleen aan “meer reflux”, maar aan de oorzaak daarachter.</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Bij een kind met klachten die op reflux lijken, maar waarbij ook sprake is van onvoldoende groei of duidelijke distress na de voeding, moet je dus verder denken. Dan is het vaak niet genoeg om alleen de voeding wat in te dikken.</p>
          </div>

          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
            <p className='text-violet-800'><strong>Aandachtsvraag:</strong> Wat is een belangrijk signaal dat gewone reflux niet genoeg verklaart?</p>
            <p className='text-violet-700'><strong>Mini-antwoord:</strong> Onvoldoende groei, omdat dit wijst op een mogelijk ernstiger probleem of op een andere onderliggende oorzaak.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}
