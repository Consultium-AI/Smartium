import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image31ImperfectVaccinSummary = ({ standalone = true }) => {
  const toc = [{ id: 'imperfect', title: 'Imperfect vaccin', icon: Calculator }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Imperfect vaccin – Aangepaste formule"
      description="f = [1 − (1/R₀)]/P wanneer het vaccin niet 100% werkt."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 31"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image31"
    >
      <section id="imperfect" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Imperfect vaccin</h2>
        <p className="text-slate-700 mb-4">Als de vaccineffectiviteit P is (bijv. 75%), dan is de kritische vaccinatiegraad: f = [1 − (1/R₀)]/P. Deze formule is ook belangrijk om te onthouden.</p>
        <p className="text-slate-700 mb-4">Bij R₀ = 10 en P = 75%: f = 120%. Groepsimmuniteit is dan niet mogelijk, maar vaccinatie kan toch nuttig zijn (bijv. vermindering van ziekte-ernst, zoals bij coronavaccins).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image31ImperfectVaccinSummary
