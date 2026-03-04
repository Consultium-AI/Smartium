import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image30SlotSummary = () => {
  const toc = [{ id: 'uitbraken', title: 'Waarom uitbraken ondanks groepsimmuniteit?', icon: CheckCircle }]
  return (
    <SummaryLayout
      title="Waarom uitbraken ondanks groepsimmuniteit?"
      description="Vaccin werkt niet 100%, afnemende effectiviteit, clustering van ongevaccineerden."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 30"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image30"
    >
      <section id="uitbraken" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Redenen voor uitbraken</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Vaccin werkt niet 100%:</strong> BMR biedt ~96% bescherming tegen mazelen, ~86% tegen bof, ~95% tegen rodehond.</li>
          <li><strong>Afnemende effectiviteit:</strong> Kinkhoestvaccin werkt minder goed door veranderingen in de bacterie.</li>
          <li><strong>Clustering:</strong> In gebieden met veel ongevaccineerden (bijv. Biblebelt) kunnen uitbraken ontstaan.</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image30SlotSummary
