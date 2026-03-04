import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17LichamelijkOnderzoekSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'lo', title: 'Lichamelijk onderzoek en dehydratie', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Lichamelijk onderzoek – dehydratie-inschatting"
      description="Vitale parameters en formule voor inschatting dehydratiepercentage."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 17"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image17"
    >
      <section id="lo" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Lichamelijk onderzoek en dehydratie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een kind met diarree en braken is het belangrijk om de mate van dehydratie in te schatten. Dit bepaalt de behandelstrategie (thuis met ORS vs. ziekenhuisopname).
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Vitale parameters</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Hartfrequentie, ademfrequentie</li>
              <li>Bloeddruk (bij oudere kinderen)</li>
              <li>Capillaire refill tijd</li>
              <li>Gewicht (vergelijking met recent gewicht indien bekend)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Formule dehydratiepercentage</h4>
            <p className="text-amber-700 text-sm mb-2">
              % dehydratie = (gewicht voor ziekte − gewicht bij presentatie) / gewicht voor ziekte × 100%
            </p>
            <p className="text-amber-600 text-xs m-0">
              Indien gewicht voor ziekte niet bekend is, wordt de inschatting gebaseerd op klinische tekens (turgor, fontanel, slijmvliezen, bewustzijn, urineproductie).
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Klinische tekens dehydratie</h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li>Mild: droge slijmvliezen, licht verminderde turgor</li>
              <li>Matig: diepliggende fontanel, versnelde pols, verminderde urine</li>
              <li>Ernstig: shock, verminderd bewustzijn, zeer slechte perfusie</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17LichamelijkOnderzoekSummary
