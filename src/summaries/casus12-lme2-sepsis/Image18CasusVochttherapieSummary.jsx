import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18CasusVochttherapieSummary = () => {
  const toc = [{ id: 'vocht', title: 'Casus – Vochttherapie', icon: Droplets }]
  return (
    <SummaryLayout
      title="Casus – Vochttherapie bij sepsis"
      description="Kristalloïd 30 mL/kg in de eerste 3 uur."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image18"
    >
      <section id="vocht" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Vochttherapie bij sepsis en septische shock</h2>
        <p className="text-slate-700 mb-4">De Surviving Sepsis Campaign adviseert voor de initiële vochtresuscitatie bij sepsis en septische shock:</p>
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">Aanbeveling</h4>
          <ul className="list-disc pl-6 space-y-1 text-blue-700 text-sm">
            <li>Kristalloïden (bijv. fysiologisch zout, Ringer-lactaat) als eerste keuze</li>
            <li>30 mL/kg in de eerste 3 uur bij hypotensie of lactaat van minimaal 4 mmol/L</li>
            <li>Geen hydroxyethylzetmeel (HES) voor vochtresuscitatie</li>
          </ul>
        </div>
        <p className="text-slate-700 mt-4">Bij onvoldoende respons op vocht: vasopressoren starten om MAP van minimaal 65 mmHg te bereiken.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18CasusVochttherapieSummary
