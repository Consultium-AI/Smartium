import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21WorstelingSamenlevingSummary = () => {
  const toc = [{ id: 'samenleving', title: 'Worsteling samenleving', icon: Users }]
  return (
    <SummaryLayout
      title="Worsteling samenleving"
      description="Kruisinga, debat verplichte vaccinatie, geen verplichting."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image21"
    >
      <section id="samenleving" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Worsteling van de samenleving</h2>
        <p className="text-slate-700 mb-4">Kruisinga leidde het debat over verplichte vaccinatie. Uiteindelijk koos Nederland niet voor een wettelijke verplichting, maar voor vrijwillige deelname met ruimte voor gewetensbezwaar.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image21WorstelingSamenlevingSummary
