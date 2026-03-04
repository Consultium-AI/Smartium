import { BarChart2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15DIIIntroSummary = () => {
  const toc = [{ id: 'dii', title: 'Dietary Inflammatory Index', icon: BarChart2 }]
  return (
    <SummaryLayout
      title="Voeding en immuunsysteem (5) – Dietary Inflammatory Index"
      description="Pro- en anti-inflammatoire markers en voedingscomponenten."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image15"
    >
      <section id="dii" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Dietary Inflammatory Index (DII)</h2>
        <p className="text-slate-700 mb-4">De DII koppelt voedingspatronen aan inflammatoire markers.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Pro-inflammatoir:</strong> CRP, IL-1β, TNF
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>Anti-inflammatoir:</strong> IL-4, IL-10
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15DIIIntroSummary
