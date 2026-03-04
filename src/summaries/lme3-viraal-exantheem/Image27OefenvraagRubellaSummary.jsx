import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image27OefenvraagRubellaSummary = () => {
  const tableOfContents = [
    { id: 'oefen', title: 'Oefenvraag rubella', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Oefenen – Rubella"
      description="Samenvatting van de oefenvraag over typische kenmerken van rubella."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 27"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image27"
    >
      <section id="oefen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rubella – kernpunten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Ziektebeeld</h4>
            <p className="text-primary-700 text-sm m-0">
              Het ziektebeeld rubella is in het algemeen mild; vaak zelfs subklinisch, maar de rode uitslag is wel kenmerkend. Kinderen zijn er verder weinig ziek van.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Typische rash</h4>
            <p className="text-amber-700 text-sm m-0">
              Een rode uitslag die begint op het gezicht en zich verspreidt naar de rest van het lichaam, en meestal binnen drie dagen verdwijnt.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Risico</h4>
            <p className="text-amber-700 text-sm m-0">
              Rubella is vooral gevaarlijk voor het ongeboren kind van een zwangere vrouw die rubella krijgt.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image27OefenvraagRubellaSummary
