import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24WetgevingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'wetgeving', title: 'Wetgeving', icon: Scale }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Wetgeving" description="De juridische kaders voor vaccinatie en dwang." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 24" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image24">
      <section id="wetgeving" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Wetgeving</h2>
        <p className="text-slate-700 mb-4">De wetgeving rond vaccinatie verschilt per land. In Nederland is vaccinatie niet verplicht, maar kunnen vormen van drang wel worden ingezet. De juridische grenzen bepalen mede wat moreel aanvaardbaar is.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image24WetgevingSummary
