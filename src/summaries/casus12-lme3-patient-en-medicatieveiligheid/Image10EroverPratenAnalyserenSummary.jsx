import { MessageCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10EroverPratenAnalyserenSummary = () => {
  const toc = [{ id: 'erover', title: 'Erover praten en analyseren', icon: MessageCircle }]
  return (
    <SummaryLayout
      title="Wat gebeurt er na een incident? – Erover praten en analyseren"
      description="Second victim, peer support en PRISMA/PRI-analyse."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image10"
    >
      <section id="erover" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Erover praten</h2>
        <p className="text-slate-700 mb-4">Bij een fout die een patiënt schaadt, ervaart de zorgverlener vaak angst, onzekerheid en schaamte. De patiënt is de <strong>first victim</strong>, de betrokken zorgverlener de <strong>second victim</strong>. Beide hebben ondersteuning nodig. Bij calamiteiten is het essentieel om betrokken zorgverleners actief te identificeren en direct peer support aan te bieden.</p>
        <h3 className="font-bold text-slate-800 mb-2">Analyseren</h3>
        <p className="text-slate-700 mb-4">De inspectie vraagt een analyse om technische, organisatorische en/of menselijke oorzaken te identificeren. Methoden: <strong>PRISMA-analyse</strong> (retrospectief) en <strong>PRI</strong> (prospectieve risico-inventarisatie).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10EroverPratenAnalyserenSummary
