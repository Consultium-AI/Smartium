import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04EthischeRechtvaardigingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'rechtvaardiging', title: 'Ethische rechtvaardiging', icon: Scale }]
  return (
    <SummaryLayout
      standalone={standalone}

      title="Ethische rechtvaardiging"
      description="Wanneer is dwang of drang bij vaccinatie moreel gerechtvaardigd?"
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image04"
    >
      <section id="rechtvaardiging" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ethische rechtvaardiging</h2>
        <p className="text-slate-700 mb-4">Ingrijpen in de autonomie van burgers vraagt een sterke rechtvaardiging. Argumenten: bescherming van kwetsbaren, groepsimmuniteit, en het voorkomen van ernstige ziekte.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image04EthischeRechtvaardigingSummary
