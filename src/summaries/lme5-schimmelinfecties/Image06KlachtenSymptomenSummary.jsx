import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06KlachtenSymptomenSummary = () => {
  const tableOfContents = [
    { id: 'klachten', title: 'Klachten en symptomen', icon: AlertCircle },
  ]

  return (
    <SummaryLayout
      title="Klachten en symptomen – Schimmelinfecties"
      description="Typische presentatie en klachten bij schimmelinfecties van de huid."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image06"
    >
      <section id="klachten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klachten en symptomen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Reden van komst</h4>
            <p className="text-primary-700 text-sm m-0">
              Patiënten komen vaak omdat ze zelf een afwijkende plek zien of een plek die zich uitbreidt of waar meer plekjes ontstaan.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Symptomen</h4>
            <p className="text-teal-700 text-sm m-0">
              De plekken jeuken vaak (licht), voelen branderig aan, of geven geen klachten.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tinea corporis</h4>
            <p className="text-amber-700 text-sm m-0">
              Typische kenmerken: annulaire (ringvormige) plek met verheven rand, opheldering/genezingstendens in het midden, fijne schilfering en scherp begrensd.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06KlachtenSymptomenSummary
