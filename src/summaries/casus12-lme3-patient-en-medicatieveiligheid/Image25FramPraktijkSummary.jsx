import { Building2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25FramPraktijkSummary = () => {
  const toc = [{ id: 'praktijk', title: 'FRAM in de praktijk', icon: Building2 }]
  return (
    <SummaryLayout
      title="FRAM in de praktijk"
      description="WAI en WAD bestuderen en vergelijken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 25"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image25"
    >
      <section id="praktijk" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM in de praktijk</h2>
        <p className="text-slate-700 mb-4">Door een WAI op te stellen leer je hoe een proces in theorie hoort te verlopen. Daarna ga je de praktijk in en beleef je het proces dat je op papier hebt bestudeerd.</p>
        <p className="text-slate-700 mb-4">WAD bestuderen kan o.a. door: patiënt of professional interviewen, meekijken/schaduwen, video-observatie, patiënt volgen.</p>
        <p className="text-slate-700 mb-4">Na het meemaken van het proces maak je een WAD-FRAM en vergelijk je die met de WAI. Het vergelijken geeft inzicht in betrokken professionals, samenhang van stappen en beïnvloeding. Verschillen kunnen bijdragen aan procesoptimalisaties, aanpassing van richtlijnen of scholing. WAI en WAD komen zelden overeen – dat is het mooie van een FRAM-analyse!</p>
      </section>
    </SummaryLayout>
  )
}

export default Image25FramPraktijkSummary
