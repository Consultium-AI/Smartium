import { Dna } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image35HPVIntroSummary = () => {
  const toc = [{ id: 'hpv', title: 'Complexere modellen: HPV', icon: Dna }]
  return (
    <SummaryLayout
      title="Complexere modellen: HPV-vaccinatie"
      description="H8 – HPV verschilt van andere RVP-ziekten: seksueel overdraagbaar, diverse typen, HPV-kanker na vele jaren."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 35"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image35"
    >
      <section id="hpv" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">HPV-vaccinatie</h2>
        <p className="text-slate-700 mb-4">HPV-vaccinatie voor meisjes in Nederland is ingevoerd in 2010, voor jongens in 2022. Modellen zoals STDSIM hebben een belangrijke rol gespeeld bij deze beslissingen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image35HPVIntroSummary
