import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen } from 'lucide-react'

export default function Image02AlgemeneBeschrijvingVanHetOnderwerpSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-02', title: 'Algemene beschrijving van het onderwerp', icon: <BookOpen className='w-4 h-4' /> },
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
      <section id='sect-02'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <BookOpen className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Algemene beschrijving van het onderwerp</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>Deze leerstof gaat over <em>Helicobacter pylori</em> en de gevolgen van infectie in de maag. Het belangrijkste idee is dat deze bacterie zich in de maag kan handhaven, de maagwand kan beschadigen en zo kan leiden tot klachten en ziektebeelden. De nadruk ligt op de relatie tussen infectie, beschadiging van het maagslijmvlies en de klinische gevolgen daarvan.</p>
            <p className='text-primary-700'><em>H. pylori</em> is dus niet alleen een bacterie die in de maag aanwezig is, maar vooral een veroorzaker van maagwandontsteking en van aandoeningen die daaruit kunnen ontstaan. Dat maakt dit onderwerp klinisch belangrijk: een infectie kan zich uiten als gastritis, kan bijdragen aan ulcuslijden en gaat samen met een verhoogd risico op maligniteit.</p>
          </div>
          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200 space-y-2'>
            <p className='text-violet-800 font-semibold'>Aandachtsvraag: Waar ligt in deze stof de nadruk op?</p>
            <p className='text-violet-700'>Mini-antwoord: Op de manier waarop <em>H. pylori</em> de maag koloniseert en beschadigt, en op de klinische gevolgen daarvan.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
