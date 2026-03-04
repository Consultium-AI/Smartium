import { Crosshair } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10FocuscontroleSummary = () => {
  const toc = [{ id: 'focuscontrole', title: 'Focuscontrole', icon: Crosshair }]
  return (
    <SummaryLayout
      title="Waarom infectiefocus zoeken – Focuscontrole"
      description="Belang van focuscontrole bij sepsis."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image10"
    >
      <section id="focuscontrole" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Focuscontrole</h2>
        <p className="text-slate-700 mb-4">Het vinden en behandelen van de infectiebron is essentieel. Zonder focuscontrole kan de infectie blijven bestaan ondanks antibiotica.</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Drainage van abcessen</li>
          <li>Verwijderen van geïnfecteerde katheters of drains</li>
          <li>Chirurgische sanering bij buikinfecties (appendicitis, cholangitis, perforatie)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image10FocuscontroleSummary
