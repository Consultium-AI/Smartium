import { ListOrdered } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15EpithelialeBarrièreOefeningSummary = () => {
  const tableOfContents = [
    { id: 'cyclus', title: 'Cyclus epitheliale barrière', icon: ListOrdered },
  ]

  return (
    <SummaryLayout
      title="Epitheliale barrière theorie – Cyclus"
      description="De stappen in de cyclische epitheliale barrière theorie."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 15"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image15"
    >
      <section id="cyclus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ListOrdered className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Cyclus epitheliale barrière theorie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De epitheliale barrière theorie beschrijft een cyclisch proces met de volgende stappen:
          </p>
          
          <ol className="list-decimal pl-6 space-y-2 text-slate-700">
            <li><strong>Blootstelling aan beschadigende omgevingsfactoren</strong></li>
            <li><strong>Ontsteking en verzwakking van epitheliale barrière</strong></li>
            <li><strong>Translocatie van microbiota naar onderliggend bindweefsel</strong></li>
            <li><strong>Kolonisatie van pathogenen en microbiële dysbiose</strong></li>
            <li><strong>Gestoord herstel van de epitheliale barrière</strong></li>
          </ol>
          
          <p>
            Deze cyclus kan zichzelf in stand houden: gestoord herstel en dysbiose leiden tot verdere blootstelling en verzwakking.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15EpithelialeBarrièreOefeningSummary
