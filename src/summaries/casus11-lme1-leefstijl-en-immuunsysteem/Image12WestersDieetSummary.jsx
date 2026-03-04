import { Pizza } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12WestersDieetSummary = () => {
  const toc = [{ id: 'westers', title: 'Westers dieet', icon: Pizza }]
  return (
    <SummaryLayout
      title="Voeding en immuunsysteem (2) – Westers dieet"
      description="Directe en indirecte effecten van het westerse dieet op het immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image12"
    >
      <section id="westers" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Westers dieet</h2>
        <p className="text-slate-700 mb-4">Het westerse dieet kenmerkt zich door veel calorieën, suikers en vetten.</p>
        <div className="space-y-3">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Direct:</strong> Suiker en vet kunnen trained immunity induceren.
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Indirect:</strong> Via het microbioom, de darmbarrière en lipidenopslag kan meta-inflammatie ontstaan.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12WestersDieetSummary
