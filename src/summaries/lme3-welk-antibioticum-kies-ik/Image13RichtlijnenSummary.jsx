import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13RichtlijnenSummary = () => {
  const toc = [{ id: 'richtlijnen', title: 'Richtlijnen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Richtlijnen"
      description="SWAB en antibioticaboekje."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image13"
    >
      <section id="richtlijnen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Richtlijnen</h2>
        <p className="text-slate-700 mb-4">SWAB (Stichting Werkgroep Antibiotica Beleid) stelt richtlijnen op voor infectiebehandeling in Nederland. Doelen: optimaal antibioticagebruik, resistentiebeheersing, kostenbeperking. Ziekenhuizen hebben een antibioticaboekje; Erasmus MC heeft een elektronische gids gebaseerd op SWAB.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13RichtlijnenSummary
