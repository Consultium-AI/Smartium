import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14IjzergebrekSummary = ({ standalone = true }) => {
  const toc = [{ id: 'ijzer', title: 'Ijzergebrek en neutrofielen', icon: Droplets }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Voeding en immuunsysteem (4) – Ijzergebrek"
      description="Effect van ijzergebrek op neutrofielen en bactericide functie."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image14"
    >
      <section id="ijzer" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ijzergebrek bij neutrofielen</h2>
        <p className="text-slate-700 mb-4">Bij ijzergebrek produceren neutrofielen minder zuurstofradicalen. Dit leidt tot een verminderde bactericide functie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14IjzergebrekSummary
