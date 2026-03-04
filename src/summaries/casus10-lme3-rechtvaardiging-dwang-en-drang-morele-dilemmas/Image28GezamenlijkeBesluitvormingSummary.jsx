import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image28GezamenlijkeBesluitvormingSummary = () => {
  const toc = [{ id: 'gezamenlijke-besluitvorming', title: 'Gezamenlijke besluitvorming', icon: Users }]
  return (
    <SummaryLayout title="Gezamenlijke besluitvorming" description="Samen beslissen over vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 28" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image28">
      <section id="gezamenlijke-besluitvorming" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gezamenlijke besluitvorming</h2>
        <p className="text-slate-700 mb-4">Gezamenlijke besluitvorming (shared decision making) tussen arts, ouders en waar mogelijk het kind, versterkt het vertrouwen en kan vaccinatieweigering voorkomen. Het is een ethisch verantwoorde aanpak naast dwang en drang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image28GezamenlijkeBesluitvormingSummary
