import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08VermenigvuldigingSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'vermenigvuldiging', title: 'Vermenigvuldiging van darmparasieten', icon: Layers },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Vermenigvuldiging van darmparasieten"
      description="Verschil tussen protozoa en wormen in vermenigvuldiging en transmissie."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image08"
    >
      <section id="vermenigvuldiging" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vermenigvuldiging van darmparasieten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Parasieten moeten zich vermenigvuldigen om als soort te overleven. De wijze waarop darmprotozoa dat doen in de darm verschilt van die van parasitaire wormen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Parasitaire protozoa</h4>
              <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
                <li>Kunnen zich in de darm vermenigvuldigen</li>
                <li>Vormen cysten die via de ontlasting bijdragen aan transmissie</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Parasitaire wormen</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Kunnen zich niet in de darm vermenigvuldigen</li>
                <li>Produceren eieren als nageslacht</li>
                <li>Soms auto-infectie: larven infecteren dezelfde gastheer opnieuw</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Beloop worminfecties</h4>
            <p className="text-slate-600 text-sm m-0">
              De ontwikkelingscyclus moet telkens volledig doorlopen worden voordat nieuwe volwassen wormen ontstaan. Dit duurt vaak weken tot maanden. Het beloop van worminfecties is over het algemeen langzaam en het zijn langdurige infecties.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08VermenigvuldigingSummary
