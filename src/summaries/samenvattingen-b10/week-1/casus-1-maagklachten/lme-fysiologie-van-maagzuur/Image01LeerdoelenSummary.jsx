import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen } from 'lucide-react'

export default function Image01LeerdoelenSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: <BookOpen className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Leerdoelen'}
      description={'Na het doornemen van deze stof kun je de fysiologie, regulatie en bescherming rond maagzuur uitleggen.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-01'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <BookOpen className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Leerdoelen</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <p className={'text-primary-800'}>Na het doornemen van deze stof moet je kunnen:</p>
            <ul className={'list-disc pl-6 space-y-1 text-primary-700 text-sm'}>
              <li>uitleggen waarom de lage pH in de maag belangrijk is voor de vertering;</li>
              <li>beschrijven hoe zoutzuur door de pariètale cel wordt uitgescheiden, met de daarbij betrokken eiwitten en intracellulaire signaalmoleculen;</li>
              <li>de regulatie van de zoutzuursecretie uitleggen door hormonale en neurale factoren, en de werking van verschillende maagzuurremmers verklaren;</li>
              <li>onderscheid maken tussen de cefale, gastrische en intestinale fase van de zuursecretie, en het belang van elke fase benoemen;</li>
              <li>beschrijven hoe de maagwand wordt beschermd tegen maagzuur, en hoe Helicobacter deze bescherming aantast;</li>
              <li>de noodzaak van maagbeschermers bij gebruik van NSAIDs verklaren op basis van het werkingsmechanisme van NSAIDs in de mucuscellen.</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
