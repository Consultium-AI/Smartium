import { GitCompare } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13AmoxicillineVsAugmentinSummary = () => {
  const toc = [{ id: 'verschil', title: 'Verschil amoxicilline en Augmentin', icon: GitCompare }]
  return (
    <SummaryLayout
      title="Amoxicilline vs. Augmentin"
      description="Het verschil tussen amoxicilline en Augmentin (amoxicilline-clavulaanzuur)."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image13"
    >
      <section id="verschil" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Verschil amoxicilline en Augmentin</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Augmentin is amoxicilline met de bètalactamaseremmer clavulaanzuur. Door de bètalactamaseremmer dekt het ook bacteriën die smalspectrum bètalactamase kunnen maken. Daarmee heeft Augmentin een bredere dekking tegen gramnegatieve staven.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Zo is <em>S. aureus</em> bijna altijd resistent tegen penicilline en amoxicilline, maar nog wel gevoelig voor Augmentin.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image13AmoxicillineVsAugmentinSummary
