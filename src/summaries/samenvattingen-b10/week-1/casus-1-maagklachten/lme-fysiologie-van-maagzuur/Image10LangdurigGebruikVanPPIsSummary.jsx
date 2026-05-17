import SummaryLayout from '../../components/SummaryLayout'
import { Pill } from 'lucide-react'

export default function Image10LangdurigGebruikVanPPIsSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-10', title: 'Langdurig gebruik van PPI’s', icon: <Pill className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Langdurig gebruik van PPI’s'}
      description={'Langdurig gebruik van protonpompremmers kan nadelen hebben, waaronder infecties en malabsorptie.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-10'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <Pill className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Langdurig gebruik van PPI’s</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>PPI’s worden veel gebruikt, soms ook zonder doktersrecept. Langdurig gebruik kan nadelen hebben. Genoemd worden:</p>
            <ul className={'list-disc pl-6 space-y-1 text-slate-700 text-sm'}>
              <li>een verhoogd risico op <strong>darminfecties</strong>, bijvoorbeeld met <strong>C. difficile</strong> of resistente bacteriën;</li>
              <li><strong>malabsorptie</strong> van onder andere calcium, magnesium, ijzer en vitamine B12.</li>
            </ul>
          </div>
          <div className={'p-5 bg-amber-50 rounded-xl border border-amber-200'}>
            <p className={'text-amber-700'}>Deze nadelen worden niet of nauwelijks gezien bij langdurig gebruik van H2-receptorantagonisten.</p>
            <p className={'text-amber-700'}>Bij chronisch gebruik is het advies om de noodzaak van de PPI regelmatig te heroverwegen. Bij veel patiënten zonder duidelijke indicatie kan afbouwen succesvol zijn.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}
