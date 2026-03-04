import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25KinderrechtenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'kinderrechten', title: 'Kinderrechten', icon: Users }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Kinderrechten" description="Het belang van het kind en kinderrechten bij vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 25" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image25">
      <section id="kinderrechten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kinderrechten</h2>
        <p className="text-slate-700 mb-4">Het VN-Kinderrechtenverdrag benadrukt het belang van het kind. Bij vaccinatieweigering door ouders moet de arts het recht van het kind op gezondheid afwegen tegen de ouderlijke autonomie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image25KinderrechtenSummary
