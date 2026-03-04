import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07StudiesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'studies', title: 'Studies naar medicatiefouten', icon: BarChart3 }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Studies naar medicatiefouten"
      description="Omvang van het probleem: Nivel- en HARM-onderzoek."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image07"
    >
      <section id="studies" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Hoe groot is het probleem?</h2>
        <p className="text-slate-700 mb-4">Nivel (2004): retrospectief onderzoek in 21 ziekenhuizen naar omvang, aard, ernst en kosten van onbedoelde schade. Naar aanleiding hiervan werd het landelijke VMS Veiligheidsprogramma gelanceerd (2008); het onderzoek wordt elke 4 jaar herhaald.</p>
        <p className="text-slate-700 mb-4">HARM-onderzoek (2005–2006): prospectief onderzoek in 21 Nederlandse ziekenhuizen (40 dagen) naar acute geneesmiddel-gerelateerde, potentieel vermijdbare opnames.</p>
        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <strong>Belangrijk cijfer:</strong> Gemiddeld circa <strong>40.000</strong> geneesmiddel-gerelateerde ziekenhuisopnames per jaar.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07StudiesSummary
