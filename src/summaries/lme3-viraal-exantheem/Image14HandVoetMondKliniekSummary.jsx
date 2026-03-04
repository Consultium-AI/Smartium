import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14HandVoetMondKliniekSummary = () => {
  const tableOfContents = [
    { id: 'etiologie', title: 'Hand-voet-mondziekte', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Hand-voet-mondziekte – Klinische presentatie"
      description="Enterovirussen, transmissie en het karakteristieke ziektebeeld van hand-voet-mondziekte."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image14"
    >
      <section id="etiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Hand-voet-mondziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Hand-voet-mondziekte wordt veroorzaakt door verschillende enterovirussen. De meest voorkomende zijn op dit moment: <strong>coxsackievirus A16</strong>, <strong>coxsackievirus A6</strong> en <strong>enterovirus A71</strong>.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Transmissie en leeftijd</h4>
            <p className="text-amber-700 text-sm m-0">
              Overdracht vindt plaats via het epitheel van mond, neus en keel. De ziekte treft vooral kinderen tussen 1 en 5 jaar.
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
            Klachten omvatten vaak koorts, buikpijn, braken, diarree en algemene malaise. Het beloop kan zeer mild of subklinisch zijn.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Typische rash</h4>
            <p className="text-primary-700 text-sm mb-2">
              De karakteristieke rash met vesikels begint meestal in de mond met rode maculae waarop kleine blaasjes met helder vocht. Deze laesies zijn te vinden op de tong, het zachte gehemelte, wangslijmvlies en/of farynxbogen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Daarna kunnen sommige patiënten niet-jeukende papels met blaasjes omgeven door een rode halo ontwikkelen op de handpalmen en/of voetzolen. Verder kan een erythemateuze huiduitslag op de romp of het gezicht ontstaan.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14HandVoetMondKliniekSummary
