import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11SubsidiariteitSummary = () => {
  const toc = [{ id: 'subsidiariteit', title: 'Subsidiariteit', icon: Layers }]
  return (
    <SummaryLayout title="Subsidiariteit" description="Eerst minder ingrijpende maatregelen." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 11" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image11">
      <section id="subsidiariteit" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Subsidiariteit</h2>
        <p className="text-slate-700 mb-4">Het subsidiariteitsbeginsel: pas zwaardere maatregelen toe als mildere niet werken. Eerst voorlichting, dan drang, pas daarna dwang.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11SubsidiariteitSummary
