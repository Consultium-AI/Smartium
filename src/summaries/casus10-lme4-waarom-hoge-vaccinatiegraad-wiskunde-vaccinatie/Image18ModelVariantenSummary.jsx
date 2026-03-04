import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18ModelVariantenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'varianten', title: 'Varianten van het SIR-model', icon: GitBranch }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Welk model past bij welke ziekte?"
      description="SIR, SIS, SIRS, SEIR, SEIRS – voorbeelden per ziekte."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image18"
    >
      <section id="varianten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Modelvarianten en ziekten</h2>
        <div className="space-y-3 text-slate-700">
          <p><strong>SIR:</strong> mazelen, bof, rodehond, kinkhoest (levenslange immuniteit)</p>
          <p><strong>SIS:</strong> verkoudheid, chlamydia, schurft (geen noemenswaardige immuniteit)</p>
          <p><strong>SIRS:</strong> malaria (immuniteit niet levenslang)</p>
          <p><strong>SEIR:</strong> SARS, MERS (incubatietijd)</p>
          <p><strong>SEIRS:</strong> COVID-19 (incubatietijd + immuniteit verdwijnt)</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18ModelVariantenSummary
