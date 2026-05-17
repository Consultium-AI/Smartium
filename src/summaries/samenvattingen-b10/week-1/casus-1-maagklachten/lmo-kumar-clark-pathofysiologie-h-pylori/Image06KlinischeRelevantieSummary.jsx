import SummaryLayout from '../../components/SummaryLayout'
import { Stethoscope } from 'lucide-react'

export default function Image06KlinischeRelevantieSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-06', title: 'Klinische relevantie', icon: <Stethoscope className='w-4 h-4' /> },
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
      <section id='sect-06'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Stethoscope className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Klinische relevantie</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200 space-y-4'>
            <p className='text-teal-800'>De klinische relevantie van dit onderwerp is duidelijk: <em>H. pylori</em> infectie kan belangrijke maagproblemen veroorzaken. Voor de geneeskunde is het daarom essentieel om te begrijpen hoe een ogenschijnlijk eenvoudige infectie kan leiden tot een ontstekingsreactie en vervolgens tot ernstiger ziektebeelden.</p>
            <p className='text-teal-700'>Dit maakt de stof relevant voor het leren denken in ziekteverwekkende mechanismen. Niet alleen de bacterie zelf is belangrijk, maar vooral de manier waarop de bacterie het slijmvlies beïnvloedt en welke gevolgen dat heeft voor de patiënt.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
