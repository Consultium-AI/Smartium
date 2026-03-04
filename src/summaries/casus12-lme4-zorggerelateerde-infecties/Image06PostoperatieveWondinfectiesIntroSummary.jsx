import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06PostoperatieveWondinfectiesIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'powi', title: 'Postoperatieve wondinfecties', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Postoperatieve wondinfecties"
      description="Introductie op postoperatieve wondinfecties (POWI) als belangrijke zorggerelateerde infectie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image06"
    >
      <section id="powi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Postoperatieve wondinfecties (POWI)</h2>
        <p className="text-slate-700 leading-relaxed">
          Postoperatieve wondinfecties zijn een van de meest voorkomende zorggerelateerde infecties. Ze ontstaan na een operatieve ingreep en kunnen de genezing vertragen, extra behandeling vereisen en in ernstige gevallen tot complicaties leiden. Preventie en goede wondzorg zijn essentieel.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image06PostoperatieveWondinfectiesIntroSummary
