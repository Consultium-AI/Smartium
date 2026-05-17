import SummaryLayout from '../../components/SummaryLayout'
import { Activity } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-03', title: 'Waarom is reflux bij zuigelingen zo vaak normaal?', icon: Activity },
]

export default function Image03WaaromIsRefluxBijZuigelingenZoVaakNormaalSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Waarom is reflux bij zuigelingen zo vaak normaal?'
      description='Anatomische en fysiologische verklaringen voor veelvoorkomende reflux bij zuigelingen.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-03' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Activity className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Waarom is reflux bij zuigelingen zo vaak normaal?</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>Bij kleinere kinderen komt het teruggeven van voeding gemakkelijk voor. Daar zijn een paar redenen voor:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>de <strong>oesophagus</strong> is korter;</li>
              <li>zuigelingen krijgen veel <strong>vloeibare voeding</strong>;</li>
              <li>zuigelingen liggen vaak in <strong>liggende houding</strong>;</li>
              <li>er is een lagere basale <strong>LES-druk</strong>;</li>
              <li>bij huilen stijgt de <strong>intra-abdominale druk</strong>.</li>
            </ul>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>
              De <strong>LES</strong> is de <strong>lower oesophageal sphincter</strong>, de onderste slokdarmsfincter. Dit is geen echte anatomische ring, maar meer een <strong>hoge-drukzone</strong> die ervoor zorgt dat maaginhoud normaal niet terugstroomt.
            </p>
          </div>

          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p className='text-teal-900'>Belangrijke refluxpreventieve mechanismen zijn:</p>
            <ul className='list-disc pl-6 space-y-1 text-teal-700 text-sm'>
              <li>tonische LES-contractie;</li>
              <li>het <strong>diafragma crura</strong> als externe sfinctercomponent;</li>
              <li>de <strong>acute hoek van His</strong> tussen slokdarm en maagfundus;</li>
              <li><strong>oesofageale klaring</strong> door secundaire peristaltiek;</li>
              <li><strong>speeksel</strong>, dat zuur kan neutraliseren;</li>
              <li><strong>snelle maaglediging</strong>.</li>
            </ul>
          </div>

          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
            <p className='text-violet-800'><strong>Aandachtsvraag:</strong> Waarom neemt fysiologische reflux af als kinderen ouder worden?</p>
            <p className='text-violet-700'><strong>Mini-antwoord:</strong> Door verbetering van de onderste slokdarmsfincter en de motiliteit van de oesophagus, meer vaste voeding en minder tijd in liggende houding.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}
