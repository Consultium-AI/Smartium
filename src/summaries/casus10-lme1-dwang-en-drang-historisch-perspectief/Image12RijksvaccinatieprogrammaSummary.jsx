import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12RijksvaccinatieprogrammaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'rvp', title: 'Rijksvaccinatieprogramma', icon: Activity }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Rijksvaccinatieprogramma"
      description="Post-WWII, jaren 60-70, circa 90% vaccinatiegraad."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image12"
    >
      <section id="rvp" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Rijksvaccinatieprogramma</h2>
        <p className="text-slate-700 mb-4">Na de Tweede Wereldoorlog werd het Rijksvaccinatieprogramma opgezet. In de jaren 60 en 70 bereikte de vaccinatiegraad circa 90 procent.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12RijksvaccinatieprogrammaSummary
