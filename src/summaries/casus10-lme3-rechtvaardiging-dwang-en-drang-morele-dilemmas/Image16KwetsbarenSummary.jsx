import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16KwetsbarenSummary = () => {
  const toc = [{ id: 'kwetsbaren', title: 'Kwetsbaren', icon: Shield }]
  return (
    <SummaryLayout title="Kwetsbaren" description="Bescherming van kwetsbare groepen." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 16" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image16">
      <section id="kwetsbaren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kwetsbaren</h2>
        <p className="text-slate-700 mb-4">Mensen die niet gevaccineerd kunnen worden (bijv. immuungecompromitteerden) zijn afhankelijk van groepsimmuniteit. Dit versterkt het argument voor vaccinatie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16KwetsbarenSummary
