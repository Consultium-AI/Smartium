import { TrendingUp } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10TrainedImmunitySummary = () => {
  const toc = [{ id: 'trained', title: 'Trained immunity en tolerantie', icon: TrendingUp }]
  return (
    <SummaryLayout
      title="Trained immunity en tolerantie"
      description="Versterkte of verzwakte respons bij herhaalde stimulatie."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image10"
    >
      <section id="trained" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Trained immunity en tolerantie</h2>
        <p className="text-slate-700 mb-4">Bij herhaalde stimulatie van het aangeboren immuunsysteem kan de respons versterkt (trained immunity) of verzwakt (tolerantie) zijn. Dit hangt af van de aard en timing van de prikkels.</p>
        <p className="text-slate-700 mb-4">De grafiek toont het verschil tussen primaire en secundaire stimulatie. Bij trained immunity is de respons op de tweede prikkel sterker; bij tolerantie juist zwakker (bron: Netea et al. 2020).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10TrainedImmunitySummary
