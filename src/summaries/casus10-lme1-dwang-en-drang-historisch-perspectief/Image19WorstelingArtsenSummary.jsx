import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19WorstelingArtsenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'artsen', title: 'Worsteling artsen', icon: Stethoscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Worsteling artsen"
      description="Frits Dekking, Mattheus 22:39, Romeinen 13:1, huisbezoeken Tholen."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image19"
    >
      <section id="artsen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Worsteling van artsen</h2>
        <p className="text-slate-700 mb-4">Frits Dekking illustreerde de worsteling van artsen: naastenliefde (Mattheus 22:39) versus gehoorzaamheid aan de overheid (Romeinen 13:1). Huisbezoeken op Tholen toonden de praktische spanningen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19WorstelingArtsenSummary
