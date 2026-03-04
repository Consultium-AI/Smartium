import { ClipboardList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22BehandelingSummary = () => {
  const toc = [{ id: 'behandeling', title: 'Behandelprincipes sepsis', icon: ClipboardList }]
  return (
    <SummaryLayout
      title="Behandelprincipes sepsis – Samenvatting"
      description="Focus, kristalloïd, antibiotica binnen 4 uur, noradrenaline."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image22"
    >
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Behandelprincipes sepsis</h2>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>Focus:</strong> Identificeer en behandel de infectiebron (longen, abdomen, urinewegen, huid). Focuscontrole is essentieel (abcesdrainage, chirurgie bij perforatie).
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Vochttherapie:</strong> Kristalloïd 30 mL/kg in de eerste 3 uur bij hypotensie of lactaat ≥4 mmol/L.
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Antibiotica:</strong> Start empirisch breedspectrum antibiotica zo snel mogelijk, idealiter binnen 4 uur na herkenning. Bloedkweken vóór start.
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <strong>Vasopressoren:</strong> Noradrenaline als eerste keuze bij onvoldoende respons op vocht om MAP ≥65 mmHg te bereiken.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image22BehandelingSummary
