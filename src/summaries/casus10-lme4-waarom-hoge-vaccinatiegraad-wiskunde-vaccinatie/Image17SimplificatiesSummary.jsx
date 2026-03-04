import { ListChecks } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17SimplificatiesSummary = () => {
  const toc = [{ id: 'simplificaties', title: 'Simplificaties van het SIR-model', icon: ListChecks }]
  return (
    <SummaryLayout
      title="Simplificaties van het SIR-model"
      description="Welke vereenvoudigingen worden gemaakt en wanneer varianten nodig zijn."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image17"
    >
      <section id="simplificaties" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Simplificaties</h2>
        <p className="text-slate-700 mb-4">Elk model is een vereenvoudiging. Het SIR-model maakt o.a. deze aannames:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700 mb-4">
          <li>Geen geboorte en sterfte</li>
          <li>Levenslange immuniteit</li>
          <li>Geen incubatietijd</li>
          <li>Geen leeftijdsstructuur</li>
          <li>Geen oversterfte van geïnfecteerden</li>
          <li>Geen seizoenseffecten</li>
          <li>Alle individuen in een compartiment zijn gelijk (homogeniteit)</li>
        </ul>
        <p className="text-slate-700 text-sm">Varianten: SIRS (niet-levenslange immuniteit), SEIR (incubatietijd), SEIRS (beide).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17SimplificatiesSummary
