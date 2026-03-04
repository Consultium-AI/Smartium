import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05WaterpokkenKliniekSummary = () => {
  const tableOfContents = [
    { id: 'vzv', title: 'Varicella zoster virus', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Waterpokken – Klinische presentatie"
      description="Varicella zoster virus (VZV), transmissie en het karakteristieke ziektebeeld van waterpokken."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image05"
    >
      <section id="vzv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Varicella zoster virus (VZV)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het varicella zoster virus (VZV), ook wel bekend als het waterpokvirus, is een veel voorkomende kinderziekte in Nederland.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Transmissie</h4>
            <p className="text-amber-700 text-sm m-0">
              VZV is een zeer besmettelijke virusinfectie die wordt overgedragen via <strong>druppels en aerosolen</strong>, of via <strong>direct contact</strong> van de slijmvliezen met de inhoud van de blaasjes.
            </p>
          </div>
        </div>
      </section>

      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Koorts, malaise en een karakteristieke rash met blaasjes. Klassiek bestaat de rash uit blaasjes in verschillende fases: variërend van net ontstane kleine blaasjes, tot al wat grotere blaasjes, tot al bijna of helemaal ingedroogde blaasjes, al dan niet met korstjes.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Progression</h4>
            <p className="text-primary-700 text-sm m-0">
              Vaak beginnen de vlekjes op het hoofd, ook op de behaarde hoofdhuid en de romp, en ontwikkelen ze zich binnen enkele uren tot dagen tot papels en vesikels over het hele lijf.
            </p>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <p className="text-slate-600 text-sm m-0">
              <strong>Klassieke uiting van waterpokken:</strong> papels/blaasjes in verschillende stadia tegelijk aanwezig.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05WaterpokkenKliniekSummary
