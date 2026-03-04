import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image26EindeSummary = ({ standalone = true }) => {
  const toc = [{ id: 'einde', title: 'Einde', icon: CheckCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Einde module"
      description="Afsluiting immunomodulatie."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 26"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image26"
    >
      <section id="einde" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Einde</h2>
        <p className="text-slate-700 mb-4">Deze module behandelde immunosuppressiva en immunostimulantia. Immunomodulatie is een belangrijk onderdeel van de moderne geneeskunde.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image26EindeSummary
