import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11ContraIndicatiesSummary = () => {
  const toc = [{ id: 'ci', title: 'Relatieve contra-indicaties', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Relatieve contra-indicaties"
      description="Bijwerkingen en toxiciteit van antibiotica."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image11"
    >
      <section id="ci" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Relatieve contra-indicaties</h2>
        <p className="text-slate-700">Onder andere: nier/leverfunctie, allergie, interacties, bijwerkingen. Bijwerking is ongewenst effect. Voorbeelden: CZS insulten, trombopenie, diarree, nierinsufficientie, ototoxiciteit.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11ContraIndicatiesSummary
