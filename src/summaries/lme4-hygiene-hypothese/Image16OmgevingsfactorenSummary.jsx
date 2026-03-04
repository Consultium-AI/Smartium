import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16OmgevingsfactorenSummary = () => {
  const tableOfContents = [
    { id: 'allergenen', title: 'Allergenen en barrière', icon: AlertTriangle },
    { id: 'factoren', title: 'Omgevingsfactoren', icon: AlertTriangle },
    { id: 'obesitas', title: 'Obesitas', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      title="Omgevingsfactoren en epitheliale barrière"
      description="Welke factoren kunnen de epitheliale barrière verstoren? Allergenen, chemicaliën en obesitas."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 16"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image16"
    >
      <section id="allergenen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Allergenen en barrière
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Epitheliale barrières van huid en slijmvliezen zijn essentieel om allergenen buiten het lichaam te houden. Diverse allergenen (bv. van planten of huisstofmijten) zijn enzymen die kunnen bijdragen aan het instabieler maken van het epitheel, waardoor ze gemakkelijker doordringen in het onderliggende weefsel.
          </p>
        </div>
      </section>

      <section id="factoren" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Omgevingsfactoren die de barrière verstoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Sinds de jaren zestig zijn er meer dan 350.000 nieuwe chemische moleculen geïntroduceerd in onze leefomgeving. Veel omgevingsfactoren kunnen de integriteit van de epitheliale barrière verstoren:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>Emulgatoren in ultra-bewerkt voedsel</li>
            <li>Per- en polyfluorverbindingen (PFAS)</li>
            <li>Voedings-, kleur- en zoetstoffen</li>
            <li>Detergentia (bijv. in wasmiddelen)</li>
            <li>Sigarettenrook</li>
            <li>Microplastics</li>
            <li>Pathogenen (virussen in luchtwegen of maagdarmkanaal)</li>
          </ul>
        </div>
      </section>

      <section id="obesitas" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Obesitas
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ernstig overgewicht (obesitas, BMI &gt;30) is de afgelopen decennia sterk toegenomen en is geassocieerd met een verhoogde kans op allergieën. Obesitas gaat gepaard met verhoogde productie van ontstekingsstoffen (cytokinen), wat resulteert in chronische laaggradige ontsteking die de integriteit van epithelia aantast.
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron: Berni Canani et al. 2024. Allergy
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16OmgevingsfactorenSummary
