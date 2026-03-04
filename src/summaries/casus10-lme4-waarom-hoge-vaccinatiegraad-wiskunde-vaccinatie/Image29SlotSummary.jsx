import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image29SlotSummary = ({ standalone = true }) => {
  const toc = [{ id: 'groepsimmuniteit', title: 'Groepsimmuniteit – scenario\'s', icon: CheckCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Groepsimmuniteit – Drie scenario's"
      description="Geen immunisatie vs. gedeeltelijke vs. hoge immunisatie."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 29"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image29"
    >
      <section id="groepsimmuniteit" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Scenario's</h2>
        <p className="text-slate-700 mb-4">1) Niemand geïmmuniseerd: de ziekte verspreidt zich door de populatie. 2) Een deel geïmmuniseerd: de ziekte verspreidt zich gedeeltelijk. 3) Het grootste deel geïmmuniseerd: verspreiding wordt ingedamd; ook niet-gevaccineerden zijn beschermd (groepsimmuniteit).</p>
        <p className="text-slate-700 text-sm">Belangrijk voor mazelen: kinderen &lt;14 maanden (voor eerste BMR) zijn beschermd door groepsimmuniteit.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image29SlotSummary
