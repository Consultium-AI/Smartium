import { Zap } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10AmpCCarbapenemaseSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'ampc', title: 'AMP-C bètalactamase', icon: Zap },
    { id: 'carbapenemase', title: 'Carbapenemase', icon: Zap },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="AMP-C en Carbapenemase"
      description="Breedspectrum bètalactamases: AMP-C en carbapenemase."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image10"
    >
      <section id="ampc" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Breedspectrum #2: AMP-C bètalactamase</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De genen voor AMP-C bètalactamases liggen vooral op het chromosomale DNA, waardoor ze in het algemeen niet tussen verschillende bacteriesoorten worden overgedragen. Bacteriën produceren AMP-C bètalactamases onder druk van antibiotica. In eerste instantie kunnen bacteriën gevoelig zijn voor penicilline of cefalosporine, maar tijdens behandeling met deze antibiotica ontwikkelt zich resistentie door productie van AMP-C bètalactamases.
        </p>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">Let op</h4>
          <p className="text-amber-700 text-sm">Penicillines en cefalosporines mogen daarom niet worden gebruikt voor ernstige infecties met lange behandelduur bij AMP-C-producerende bacteriën.</p>
        </div>
      </section>
      <section id="carbapenemase" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Allerbreedste spectrum: Carbapenemase</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Sommige gramnegatieve bacteriën produceren bètalactamases die specifiek gericht zijn tegen carbapenem-antibiotica (zoals meropenem). Deze worden carbapenemases genoemd. Dit is wereldwijd een groot probleem, omdat de grootste groep van de krachtigste antibiotica hierdoor onwerkzaam wordt.
        </p>
        <p className="text-slate-700 text-sm">
          Resistentie van Pseudomonas door carbapenemase komt in de EU voor; de percentages variëren per land (bron: Antimicrobial resistance surveillance in Europe).
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image10AmpCCarbapenemaseSummary
