import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image29OefenvraagRoodvonkSummary = () => {
  const tableOfContents = [
    { id: 'oefen', title: 'Oefenvraag roodvonk', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Oefenen – Roodvonk"
      description="Typische kenmerken van roodvonk bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 29"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image29"
    >
      <section id="oefen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Roodvonk – typische kenmerken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kenmerkende combinatie</h4>
            <p className="text-primary-700 text-sm m-0">
              Hoge koorts gevolgd door een <strong>aardbeientong</strong> en een rode, schuurpapierachtige uitslag.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Differentiatie</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij roodvonk zijn de opvallende ruw/rode huiduitslag en afwijkingen aan de tong een goede manier om te differentiëren. Verder hebben kinderen met roodvonk vaak ook flink opgezette lymfeklieren in de hals en vergrote tonsillen, al dan niet met wit beslag.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image29OefenvraagRoodvonkSummary
