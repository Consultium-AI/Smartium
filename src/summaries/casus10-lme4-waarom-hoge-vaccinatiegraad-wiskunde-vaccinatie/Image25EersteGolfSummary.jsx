import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25EersteGolfSummary = () => {
  const toc = [{ id: 'eerstegolf', title: 'De eerste COVID-19 golf', icon: Activity }]
  return (
    <SummaryLayout
      title="De eerste COVID-19 golf in Nederland"
      description="R-getal, ziekenhuisopnames en maatregelen in 2020."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 25"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image25"
    >
      <section id="eerstegolf" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Eerste golf 2020</h2>
        <p className="text-slate-700 mb-4">R begon rond 2 (≈ R₀). R daalde rond 8 maart (eerste maatregelen Brabant). Op 16 maart (toespraak Rutte) was R &lt; 1. Door vertraging tussen besmetting en ernstige ziekte bleven ziekenhuisopnames nog stijgen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image25EersteGolfSummary
