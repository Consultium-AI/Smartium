import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13MicronutriëntenSummary = () => {
  const toc = [{ id: 'micronutriënten', title: 'Micronutriënten', icon: Pill }]
  return (
    <SummaryLayout
      title="Voeding en immuunsysteem (3) – Micronutriënten"
      description="Vitamine A, D en ijzer en hun rol in het immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image13"
    >
      <section id="micronutriënten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Micronutriënten</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Vitamine A:</strong> beïnvloedt Treg en Th17</li>
          <li><strong>Vitamine D:</strong> antimicrobiële effecten, remt verworven immuniteit</li>
          <li><strong>Ijzer:</strong> nodig voor myeloperoxidase en proliferatie; bij ijzergebrek worden lymfocyten het meest getroffen (proliferatie)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image13MicronutriëntenSummary
