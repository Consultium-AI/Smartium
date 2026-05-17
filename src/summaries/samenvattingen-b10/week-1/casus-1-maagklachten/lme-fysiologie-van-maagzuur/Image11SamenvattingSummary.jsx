import SummaryLayout from '../../components/SummaryLayout'
import { ClipboardList } from 'lucide-react'

export default function Image11SamenvattingSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-11', title: 'Samenvatting', icon: <ClipboardList className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Samenvatting'}
      description={'De kern van maagzuurproductie, regulatie, bescherming en behandeling in één overzicht.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-11'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <ClipboardList className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Samenvatting</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <p>De maag produceert sterk zuur maagsap dat nodig is voor de vertering, het doden van micro-organismen, de denaturatie van eiwitten en de activering van pepsine. Zoutzuur wordt uitgescheiden door de pariètale cel via de H+/K+-ATPase, met hulp van koolzuuranhydrase, K+-kanalen en chloridekanalen. De zuurproductie wordt gestimuleerd door acetylcholine, gastrine en histamine, en geremd door somatostatine en andere remmende factoren.</p>
            <p>De maag beschermt zichzelf met mucus en bicarbonaat. Prostaglandine E2 versterkt deze bescherming. NSAIDs en H. pylori kunnen deze afweer ondermijnen en zo maagbeschadiging of ulcusvorming veroorzaken. PPI’s remmen de protonpomp direct en werken krachtig, maar langdurig gebruik kan nadelen hebben zoals infecties en malabsorptie.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
