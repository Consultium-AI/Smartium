import { Heart } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20CTRAMeditatieSummary = () => {
  const toc = [{ id: 'ctra', title: 'CTRA, stress en meditatie', icon: Heart }]
  return (
    <SummaryLayout
      title="Andere leefstijlfactoren (4) – CTRA, stress en meditatie"
      description="Childhood trauma, stresshormonen, microbioom en effect van meditatie."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image20"
    >
      <section id="ctra" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">CTRA, stress en meditatie</h2>
        <p className="text-slate-700 mb-4">Childhood trauma en stress leiden tot verhoogde (nor)adrenaline en cortisol, wat het microbioom beïnvloedt.</p>
        <p className="text-slate-700 mb-4">Meditatie en mindfulness kunnen epigenetische veranderingen teweegbrengen en NF-κB verlagen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20CTRAMeditatieSummary
