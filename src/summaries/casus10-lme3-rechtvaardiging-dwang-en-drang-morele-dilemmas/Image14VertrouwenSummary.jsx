import { Heart } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14VertrouwenSummary = () => {
  const toc = [{ id: 'vertrouwen', title: 'Vertrouwen', icon: Heart }]
  return (
    <SummaryLayout title="Vertrouwen" description="Vertrouwen als basis voor vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 14" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image14">
      <section id="vertrouwen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Vertrouwen</h2>
        <p className="text-slate-700 mb-4">Vertrouwen in de overheid en de gezondheidszorg is essentieel voor vaccinatiebereidheid. Dwang kan dit vertrouwen ondermijnen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14VertrouwenSummary
