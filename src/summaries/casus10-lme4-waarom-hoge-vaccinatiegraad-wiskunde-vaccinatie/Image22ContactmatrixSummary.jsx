import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22ContactmatrixSummary = () => {
  const toc = [{ id: 'contactmatrix', title: 'Contactmatrix', icon: Users }]
  return (
    <SummaryLayout
      title="Contactmatrix – Leeftijdsgroepen"
      description="Parameter c wordt vaak beschreven door een matrix van contacten tussen leeftijdsgroepen."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image22"
    >
      <section id="contactmatrix" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Contactmatrix</h2>
        <p className="text-slate-700 mb-4">In veel modellen worden leeftijdsgroepen meegenomen. Parameter c wordt dan beschreven door een matrix: het aantal contacten per tijdseenheid tussen verschillende leeftijdsgroepen.</p>
        <p className="text-slate-700 text-sm">Mossong et al. (2008): 7290 vrijwilligers uit 8 Europese landen hielden 24 uur een dagboek bij. Land-specifieke contactmatrices zijn beschikbaar.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image22ContactmatrixSummary
