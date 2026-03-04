import { ArrowRight } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15BetalactamaseOrdeningSummary = ({ standalone = true }) => {
  const toc = [{ id: 'ordening', title: 'Bètalactamase – volgorde resistentie', icon: ArrowRight }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Bètalactamase – volgorde van resistentie"
      description="Ordening van bètalactamases van minst naar meest resistent."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image15"
    >
      <section id="ordening" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Volgorde van resistentie</h2>
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Er zijn verschillende soorten bètalactamase die bacteriën kunnen produceren, die elk een andere resistentie geven tegen antibiotica. De volgorde van minst naar meest resistent:
        </p>
        <div className="space-y-4">
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">1. Smalspectrum bètalactamase (minst resistent)</h4>
            <p className="text-teal-700 text-sm">Zorgt alleen voor resistentie tegen sommige penicillines en cefalosporines.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">2. ESBL</h4>
            <p className="text-amber-700 text-sm">Zorgt voor resistentie tegen penicillines en cefalosporines.</p>
          </div>
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">3. Carbapenemase (meest resistent)</h4>
            <p className="text-red-700 text-sm">Zorgt dat bacteriën ongevoelig worden voor alle bètalactam-antibiotica.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15BetalactamaseOrdeningSummary
