import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04SurveillancePneumokokkenSummary = () => {
  const tableOfContents = [
    { id: 'surveillance', title: 'Surveillance systeem', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Epidemiologie invasieve pneumokokkenziekte – Surveillance"
      description="Het sentinel-laboratoriumsurveillancesysteem voor invasieve pneumokokkenziekte in Nederland."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image04"
    >
      <section id="surveillance" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Surveillance systeem
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In Nederland is de surveillance van invasieve pneumokokkenziekte gebaseerd op een <strong>sentinel-laboratoriumsurveillancesysteem</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Nederlands Referentielaboratorium voor Bacteriële Meningitis (NRLBM)</h4>
            <p className="text-primary-700 m-0">
              Het surveillance wordt uitgevoerd door het NRLBM – een samenwerking tussen het <strong>Academisch Medisch Centrum Amsterdam (AMC)</strong> en het <strong>Rijksinstituut voor Volksgezondheid en Milieu (RIVM)</strong>.
            </p>
          </div>
          
          <p>
            Dit systeem verzamelt gegevens over invasieve pneumokokkeninfecties (zoals meningitis, bacteriëmie) en levert cruciale informatie voor de volksgezondheid en het vaccinatiebeleid.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04SurveillancePneumokokkenSummary
