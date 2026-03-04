import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08CasusSummary = ({ standalone = true }) => {
  const toc = [{ id: 'casus', title: 'Casus', icon: Stethoscope }]
  return (
    <SummaryLayout
      standalone={standalone}

      title="Casus"
      description="Praktisch moreel dilemma bij vaccinatie."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image08"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus</h2>
        <p className="text-slate-700 mb-4">Een casus illustreert het morele dilemma: ouders weigeren vaccinatie voor hun kind. Hoe ga je als arts het gesprek aan? Welke argumenten zijn ethisch verdedigbaar?</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08CasusSummary
