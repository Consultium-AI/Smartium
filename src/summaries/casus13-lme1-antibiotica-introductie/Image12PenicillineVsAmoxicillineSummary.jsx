import { GitCompare } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12PenicillineVsAmoxicillineSummary = ({ standalone = true }) => {
  const toc = [{ id: 'verschil', title: 'Verschil penicilline en amoxicilline', icon: GitCompare }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Penicilline vs. amoxicilline"
      description="Het belangrijkste verschil in spectrum tussen penicilline en amoxicilline."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image12"
    >
      <section id="verschil" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Verschil penicilline en amoxicilline</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          <strong>Amoxicilline</strong> dekt ook gramnegatieve staven, maar <strong>penicilline</strong> niet. Amoxicilline is een breedspectrum penicilline en heeft behalve werking tegen grampositieve bacteriën (met name streptokokken) ook enige werking tegen gramnegatieve staven.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Zowel penicilline als amoxicilline hebben weinig anaerobe werking. Ze werken wel tegen anaeroben in de mond, maar niet tegen alle anaeroben in de darm.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image12PenicillineVsAmoxicillineSummary
