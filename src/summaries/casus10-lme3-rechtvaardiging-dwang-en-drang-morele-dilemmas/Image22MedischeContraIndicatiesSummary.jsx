import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22MedischeContraIndicatiesSummary = () => {
  const toc = [{ id: 'medische-contra-indicaties', title: 'Medische contra-indicaties', icon: Stethoscope }]
  return (
    <SummaryLayout title="Medische contra-indicaties" description="Wanneer vaccinatie medisch niet verantwoord is." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 22" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image22">
      <section id="medische-contra-indicaties" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Medische contra-indicaties</h2>
        <p className="text-slate-700 mb-4">Bij medische contra-indicaties is vaccinatie niet verantwoord. De arts moet deze situaties herkennen en ouders correct informeren. Dwang is in deze gevallen nooit gerechtvaardigd.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image22MedischeContraIndicatiesSummary
