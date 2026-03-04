import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20InformatieVoorlichtingSummary = () => {
  const toc = [{ id: 'informatie-voorlichting', title: 'Informatie en voorlichting', icon: BookOpen }]
  return (
    <SummaryLayout title="Informatie en voorlichting" description="Het belang van goede voorlichting bij vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 20" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image20">
      <section id="informatie-voorlichting" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Informatie en voorlichting</h2>
        <p className="text-slate-700 mb-4">Goede informatie en voorlichting vormen de basis voor geïnformeerde besluitvorming over vaccinatie. Transparante communicatie over werkzaamheid, bijwerkingen en risico's kan dwang en drang verminderen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20InformatieVoorlichtingSummary
