import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13SIRModelSummary = () => {
  const toc = [{ id: 'sir', title: 'Het SIR-model', icon: GitBranch }]
  return (
    <SummaryLayout
      title="Het SIR-model en z'n varianten"
      description="S – Susceptible (Vatbaar), I – Infected (Geïnfecteerd), R – Recovered (Immuun)."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image13"
    >
      <section id="sir" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Het SIR-model</h2>
        <p className="text-slate-700 mb-4">Het SIR-model verdeelt de populatie in drie compartimenten:</p>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="p-4 bg-blue-100 rounded-xl border border-blue-200">
            <strong>S</strong> – Susceptible (Vatbaar)
          </div>
          <div className="p-4 bg-red-100 rounded-xl border border-red-200">
            <strong>I</strong> – Infected (Geïnfecteerd)
          </div>
          <div className="p-4 bg-green-100 rounded-xl border border-green-200">
            <strong>R</strong> – Recovered (Immuun)
          </div>
        </div>
        <p className="text-slate-700 text-sm">S → I → R. De pijlen geven de overgangen tussen compartimenten aan.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13SIRModelSummary
