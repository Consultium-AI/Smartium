import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08BijwerkingenOverzichtSummary = () => {
  const toc = [{ id: 'bijwerkingen', title: 'Bijwerkingen overzicht', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Bijwerkingen corticosteroïden – overzicht"
      description="Uitgebreide lijst van bijwerkingen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image08"
    >
      <section id="bijwerkingen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Bijwerkingen</h2>
        <p className="text-slate-700 mb-4">Corticosteroïden hebben veel bijwerkingen, waaronder verhoogde bloedsuiker, gewichtstoename, psychiatrische symptomen, osteoporose, infecties, maagulcera, cataract en glaucoom.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image08BijwerkingenOverzichtSummary
