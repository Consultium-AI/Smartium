import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13EpithelialeBarrièreDiagramSummary = () => {
  const tableOfContents = [
    { id: 'mechanisme', title: 'Mechanisme', icon: Shield },
  ]

  return (
    <SummaryLayout
      title="Epitheliale barrière theorie – Mechanisme"
      description="Hoe omgevingsfactoren de epitheliale barrière beschadigen en tot dysbiose, translocatie en ontsteking leiden."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image13"
    >
      <section id="mechanisme" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epitheliale barrière theorie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De epitheliale barrière theorie beschrijft een cyclisch proces:
          </p>
          
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li><strong>Blootstelling aan barrière-beschadigende omgevingsfactoren</strong> leidt tot barrièreschade en/of microbiële dysbiose/kolonisatie door opportunistische pathogenen.</li>
            <li><strong>Barrièreschade</strong> en <strong>dysbiose</strong> leiden tot <strong>microbioom-translocatie</strong> (microben dringen door naar onderliggend weefsel).</li>
            <li><strong>Microbioom-translocatie</strong> triggert <strong>ontsteking en immuunrespons</strong>.</li>
            <li>Ontsteking kan terugkoppelen naar verdere dysbiose (positieve feedbackloop).</li>
          </ol>
          
          <p>
            Dendritische cellen (DC) spelen een rol bij het monitoren van de barrière en het presenteren van antigenen na translocatie.
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron: Pat et al. 2021. Allergy. PMID:33982305
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13EpithelialeBarrièreDiagramSummary
