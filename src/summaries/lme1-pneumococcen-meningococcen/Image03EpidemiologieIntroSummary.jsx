import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03EpidemiologieIntroSummary = () => {
  const tableOfContents = [
    { id: 'deadly-bacteria', title: 'Meest dodelijke bacteriën', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Epidemiologische risicofactoren – Introductie"
      description="De twee meest dodelijke bacteriën in de reguliere Nederlandse geneeskundige zorg."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image03"
    >
      <section id="deadly-bacteria" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meest dodelijke bacteriën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-6 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <p className="text-rose-800 font-medium text-lg m-0">
              De twee meest dodelijke bacteriën in de reguliere Nederlandse geneeskundige zorg: <em>Streptococcus pneumoniae</em> en <em>Neisseria meningitidis</em>.
            </p>
          </div>
          
          <p>
            Dit hoofdstuk behandelt de <strong>epidemiologie van (invasieve) pneumokokkenziekte</strong> en <strong>meningokokkenziekte</strong>. Inzicht in de epidemiologische risicofactoren is essentieel voor het herkennen van risicopatiënten en het begrijpen van de ziektelast in de populatie.
          </p>
          
          <p className="text-slate-600 text-sm">
            <em>Streptococcus pneumoniae</em> = pneumokok; <em>Neisseria meningitidis</em> = meningokok. Beide kunnen commensaal zijn in de nasofarynx maar kunnen ook leiden tot levensbedreigende invasieve infecties.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03EpidemiologieIntroSummary
