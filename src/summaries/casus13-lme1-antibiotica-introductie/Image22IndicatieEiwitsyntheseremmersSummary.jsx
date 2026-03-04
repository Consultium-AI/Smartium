import { ClipboardList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22IndicatieEiwitsyntheseremmersSummary = () => {
  const toc = [{ id: 'indicatie', title: 'Indicatie en bijzonderheden', icon: ClipboardList }]
  return (
    <SummaryLayout
      title="Indicatie eiwitsyntheseremmers"
      description="Indicaties en bijzonderheden van macroliden, clindamycine en fusidinezuur."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image22"
    >
      <section id="indicatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Indicatie en bijzonderheden</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li><strong>Macroliden:</strong> atypische pneumonie (bijv. <em>Mycoplasma</em>, <em>Legionella</em>)</li>
          <li><strong>Clindamycine:</strong> anaerobe infecties, bijv. tandabces</li>
          <li><strong>Azitromycine:</strong> langdurige halfwaardetijd, kan eenmalig of kort worden gegeven</li>
          <li><strong>Fusidinezuur:</strong> vooral bij huidinfecties door <em>S. aureus</em>, vaak in combinatie met andere middelen</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image22IndicatieEiwitsyntheseremmersSummary
