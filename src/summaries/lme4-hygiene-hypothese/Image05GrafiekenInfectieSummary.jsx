import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05GrafiekenInfectieSummary = () => {
  const tableOfContents = [
    { id: 'grafieken', title: 'Tegenovergestelde trends', icon: BarChart3 },
    { id: 'oorzaak', title: 'Oorzaak afname infectieziekten', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Infectieziekten vs immuunziekten"
      description="De sterke afname van infectieziekten en toename van allergisch astma en auto-immuunziekten sinds de jaren 50."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image05"
    >
      <section id="grafieken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tegenovergestelde trends
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De linker grafiek illustreert de sterke afname in infectieziekten vanaf de jaren 50 van de vorige eeuw (reuma, mazelen, bof, tuberculose, hepatitis A). De rechter grafiek laat juist een sterke toename zien van allergisch astma en verschillende typen auto-immuunziekten in dezelfde periode (ziekte van Crohn, multiple sclerose, diabetes type 1, astma).
          </p>
        </div>
      </section>

      <section id="oorzaak" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belangrijkste oorzaak afname infectieziekten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Verbeterde hygiëne</h4>
            <p className="text-primary-700 text-sm mb-2">
              Verbeterde hygiëne en een schonere leefomgeving hebben de belangrijkste bijdragen geleverd aan het terugdringen van infecties.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Antibiotica hebben geen effect op virusinfecties (mazelen, bof, hepatitis A). Vaccinatie tegen mazelen en bof werden pas in de jaren 70 en 80 opgenomen in het rijksvaccinatieprogramma. Tegen longtuberculose is geen effectief vaccin beschikbaar.
            </p>
          </div>
          
          <p className="text-slate-600 text-sm">
            Bron: Bach JF N Engl J Med 2002
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05GrafiekenInfectieSummary
