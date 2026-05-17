import SummaryLayout from '../../components/SummaryLayout'
import { Microscope } from 'lucide-react'

export default function Image04HoeKoloniseertHelicobacterPyloriDeMaagwandSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-04', title: 'Hoe koloniseert Helicobacter pylori de maagwand?', icon: <Microscope className='w-4 h-4' /> },
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
      <section id='sect-04'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Microscope className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Hoe koloniseert Helicobacter pylori de maagwand?</h2>
        </div>
        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200 space-y-4'>
            <p className='text-primary-800'>Een centraal onderdeel van deze stof is het koloniseren van de maagwand. Koloniseren betekent dat een micro-organisme zich kan vestigen en in stand houden op een plek in het lichaam. In dit geval is dat de maagwand.</p>
          </div>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4'>
            <p>De bacterie moet zich dus eerst kunnen handhaven in de maag, en vervolgens invloed uitoefenen op het slijmvlies. Pas dan kan zij ontsteking en schade veroorzaken. De pathofysiologische mechanismen waarnaar hier gekeken wordt, gaan precies over dat proces: hoe <em>H. pylori</em> aanwezig kan blijven in de maag en hoe die aanwezigheid leidt tot beschadiging van het maagslijmvlies.</p>
          </div>
          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200 space-y-2'>
            <p className='text-violet-800 font-semibold'>Aandachtsvraag: Waarom is kolonisatie zo belangrijk?</p>
            <p className='text-violet-700'>Mini-antwoord: Omdat de bacterie alleen schade kan geven als zij zich in de maagwand kan vestigen en daar aanwezig blijft.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
