import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie thema', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Voorbereiding VOW Milt"
      description="Inleiding op de module: histologie van de milt en bloedcirculatie."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <LayoutList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie thema
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Doel van deze module</h4>
            <p className="text-primary-700 text-sm mb-3">
              In het VOW Milt zullen we ingaan op de histologie van de milt en ingescande microscopische preparaten bekijken. Tijdens deze korte voorbereidende e-module wordt ingegaan op de bloedcirculatie en op de globale opbouw van de milt.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Het doorlopen van deze e-module voor je naar het VOW Milt komt zorgt ervoor dat je de preparaten die je tijdens het VOW Milt bekijkt beter zult begrijpen.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Aanbevolen</h4>
            <p className="text-teal-700 text-sm m-0">
              Bekijk eventueel nog even de clip Secundaire lymfoïde organen (eerste onderdeel van de LME Secundaire lymfoïde organen), waarin de opbouw van de milt wordt besproken.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            {[
              { num: 1, title: 'Functies van de milt' },
              { num: 2, title: 'Structuren in de milt' },
              { num: 3, title: 'Rode en witte pulpa' },
              { num: 4, title: 'Open en gesloten circulatie' },
              { num: 5, title: 'Afsluiting' },
            ].map((item) => (
              <div key={item.num} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="text-primary-600 font-bold">{item.num}.</span>
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
