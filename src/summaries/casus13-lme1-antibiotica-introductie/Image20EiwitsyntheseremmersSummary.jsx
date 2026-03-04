import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20EiwitsyntheseremmersSummary = () => {
  const toc = [{ id: 'eiwit', title: 'Eiwitsyntheseremmers (50S)', icon: Layers }]
  return (
    <SummaryLayout
      title="Eiwitsyntheseremmers (50S)"
      description="Macroliden, lincosamiden en fusidinezuur."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image20"
    >
      <section id="eiwit" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Eiwitsyntheseremmers – 50S-ribosomale subunit</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antibiotica die de bacteriële eiwitsynthese remmen door binding aan het 50S-ribosomale subunit. Bestudeer in het naslagwerk:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Macroliden:</strong> azitromycine</li>
          <li><strong>Lincosamiden:</strong> clindamycine</li>
          <li><strong>Fusidinezuur</strong></li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image20EiwitsyntheseremmersSummary
