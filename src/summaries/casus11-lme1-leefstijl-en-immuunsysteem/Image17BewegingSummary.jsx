import { Footprints } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17BewegingSummary = () => {
  const toc = [{ id: 'beweging', title: 'Beweging en immuunsysteem', icon: Footprints }]
  return (
    <SummaryLayout
      title="Andere leefstijlfactoren (1) – Beweging"
      description="Effect van beweging en inactiviteit op ontsteking en immuunrespons."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image17"
    >
      <section id="beweging" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Beweging</h2>
        <p className="text-slate-700 mb-4">Inactiviteit leidt tot ontsteking. Regelmatige beweging heeft anti-inflammatoire effecten: CRP, IL-6 en TNF dalen. Het bevordert Th1, fagocytose, vaccinatierespons en Treg.</p>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
          <strong>Let op:</strong> Zeer intensieve beweging kan het infectierisico verhogen. Th1-activiteit vermindert virale infecties.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17BewegingSummary
