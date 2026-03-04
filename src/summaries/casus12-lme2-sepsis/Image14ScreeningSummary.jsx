import { Search } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14ScreeningSummary = () => {
  const toc = [{ id: 'screening', title: 'Screening tools', icon: Search }]
  return (
    <SummaryLayout
      title="Screening tools: SIRS, qSOFA en SOFA"
      description="Vergelijking van SIRS, qSOFA en SOFA voor sepsis-screening."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image14"
    >
      <section id="screening" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Screening tools</h2>
        <p className="text-slate-700 mb-4">Er zijn verschillende tools om sepsis te herkennen:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>SIRS:</strong> ≥2 van: temperatuur &lt;36 of &gt;38°C, hartfrequentie &gt;90, ademfrequentie &gt;20, leukocyten &lt;4 of &gt;12. Gevoelig maar weinig specifiek.</li>
          <li><strong>qSOFA:</strong> ≥2 van: RR ≥22, GCS &lt;15, systolische bloeddruk ≤100 mmHg. Eenvoudig, geen lab.</li>
          <li><strong>SOFA:</strong> Orgaanscore (respiratie, stolling, lever, cardiovasculair, neurologie, nieren). Sepsis = infectie + SOFA ≥2.</li>
        </ul>
        <p className="text-slate-700 mt-4">SOFA-componenten: PaO2/FiO2, trombocyten, bilirubine, MAP/vasopressoren, GCS, creatinine/urineproductie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14ScreeningSummary
