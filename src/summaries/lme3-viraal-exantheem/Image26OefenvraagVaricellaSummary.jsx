import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image26OefenvraagVaricellaSummary = () => {
  const tableOfContents = [
    { id: 'oefen', title: 'Oefenvraag varicella', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Oefenen – Varicella"
      description="Samenvatting van de oefenvraag over varicella-infectie bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 26"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image26"
    >
      <section id="oefen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Varicella – kernpunten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Transmissie</h4>
            <p className="text-primary-700 text-sm m-0">
              Varicella zoster virus wordt via aerosolen en druppels overgedragen.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Kliniek</h4>
            <p className="text-amber-700 text-sm m-0">
              Naast vaak hoge koorts is het kenmerk de typische blaasjes in verschillende stadia.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Immuniteit</h4>
            <p className="text-teal-700 text-sm m-0">
              Eenmaal varicella doorgemaakt ben je in principe levenslang immuun.
            </p>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Vaccin</h4>
            <p className="text-slate-600 text-sm m-0">
              Er is een vaccin tegen varicella zoster, wat in Nederland niet in het Rijksvaccinatieprogramma zit maar wel op indicatie of eigen verzoek gegeven kan worden.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image26OefenvraagVaricellaSummary
