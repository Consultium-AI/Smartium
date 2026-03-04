import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09ImmunosenescenceSummary = () => {
  const toc = [{ id: 'immunosenescence', title: 'Immunosenescence en epigenetica', icon: Shield }]
  return (
    <SummaryLayout
      title="Inflammaging (2) – Immunosenescence en epigenetica"
      description="Veroudering van het immuunsysteem en epigenetische veranderingen."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image09"
    >
      <section id="immunosenescence" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Immunosenescence</h2>
        <p className="text-slate-700 mb-4">Immunosenescence is de veroudering van het immuunsysteem. Kenmerken: vertraagde en verlaagde verworven immuniteit, en een zwakkere vaccinatierespons.</p>
        <h3 className="font-bold text-slate-800 mb-2">Epigenetische veranderingen</h3>
        <p className="text-slate-700 mb-2">Epigenetische mechanismen beïnvloeden genexpressie zonder de DNA-sequentie te veranderen:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li><strong>DNA-methylering</strong> – remt transcriptie</li>
          <li><strong>Histonmethylering en -acetylering</strong> – beïnvloeden de toegankelijkheid van het DNA</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image09ImmunosenescenceSummary
