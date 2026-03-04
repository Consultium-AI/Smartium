import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03IntroductieStofnamenSummary = () => {
  const toc = [{ id: 'stofnamen', title: 'Stofnamen', icon: FileText }]
  return (
    <SummaryLayout
      title="Stofnamen vs merknamen"
      description="Gebruik generieke namen voor antibiotica."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image03"
    >
      <section id="stofnamen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Stofnamen vs merknamen</h2>
        <p className="text-slate-700">Gebruik stofnamen (ciprofloxacine, meropenem). Uitzondering: Augmentin voor amoxicilline/clavulaanzuur.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image03IntroductieStofnamenSummary
