import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05DefinitieSepsisSummary = ({ standalone = true }) => {
  const toc = [{ id: 'definitie', title: 'Definitie van sepsis', icon: AlertCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Definitie van sepsis"
      description="Sepsis-3 definitie en essentiële elementen."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image05"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Definitie van sepsis</h2>
        <p className="text-slate-700 mb-4">Sepsis is een <strong>levensbedreigend orgaanfalen</strong>, veroorzaakt door een <strong>ontregelde respons van de gastheer op een infectie</strong>. (Sepsis-3 criteria, Third International Definitions for Sepsis and Septic Shock)</p>
        <h3 className="font-bold text-slate-800 mb-2">Essentiële elementen</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Sepsis is een levensbedreigende ziekte</li>
          <li>Gekenmerkt door acute orgaandysfunctie</li>
          <li>De ontregelde immuunrespons staat centraal in de pathofysiologie</li>
          <li>De oorzaak is een infectie</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image05DefinitieSepsisSummary
