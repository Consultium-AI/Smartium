import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14SOFASummary = () => {
  const toc = [{ id: 'sofa', title: 'Screening tools – SOFA-score', icon: BarChart3 }]
  return (
    <SummaryLayout
      title="Screening tools voor sepsis"
      description="SOFA-score als voorspeller van mortaliteit."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image14"
    >
      <section id="sofa" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Screening tools</h2>
        <p className="text-slate-700 mb-4">Bekende instrumenten: SIRS-criteria, qSOFA-score en SOFA-score. De Surviving Sepsis Campaign (2021) adviseert de SOFA-score.</p>
        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">SOFA-score</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Voorspelt mortaliteit</li>
            <li>Berekend bij opname en daarna elke 24 uur tot ontslag</li>
            <li>De slechtste score van de afgelopen 24 uur wordt gebruikt</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>Hoort bij SOFA:</strong> Veranderd bewustzijn, trombocyten, kreatinine, mechanische ventilatie, MAP
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Hoort niet bij SOFA:</strong> Hartslag ≥90, koorts ≥38°C, ademhalingsfrequentie, systolische bloeddruk, lactaat ≥2 mmol/L, leukocyten
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14SOFASummary
