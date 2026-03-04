import { Heart } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image29EmpathieSummary = () => {
  const toc = [{ id: 'empathie', title: 'Empathie', icon: Heart }]
  return (
    <SummaryLayout title="Empathie" description="Het belang van empathie bij vaccinatiegesprekken." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 29" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image29">
      <section id="empathie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Empathie</h2>
        <p className="text-slate-700 mb-4">Empathie voor de zorgen en overwegingen van ouders is essentieel bij gesprekken over vaccinatie. Begrip tonen kan de relatie versterken en ruimte creëren voor dialoog, ook wanneer men het oneens is.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image29EmpathieSummary
