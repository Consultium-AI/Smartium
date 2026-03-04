import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07POWIClassificatieSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'verwekker', title: 'Belangrijkste verwekker', icon: Layers },
    { id: 'classificatie', title: 'Classificatie ingrepen', icon: Layers },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Postoperatieve wondinfecties – Classificatie"
      description="Staphylococcus aureus als belangrijkste verwekker en de classificatie van chirurgische ingrepen."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image07"
    >
      <section id="verwekker" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Belangrijkste verwekker</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          <strong>Staphylococcus aureus (S. aureus)</strong> is de belangrijkste verwekker in het veroorzaken van postoperatieve wondinfecties (POWI).
        </p>
      </section>
      <section id="classificatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Classificatie van chirurgische ingrepen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Chirurgische ingrepen worden geclassificeerd van schoon tot vuil, afhankelijk van drie factoren:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li>Lokalisatie in het lichaam waar de ingreep plaatsvindt</li>
          <li>Aanwezigheid van trauma of ontsteking</li>
          <li>Naleving van aseptische chirurgische technieken</li>
        </ul>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Schone ingrepen</h4>
            <p className="text-green-700 text-sm">Meestal geplande orthopedische ingrepen, bijvoorbeeld het plaatsen van een heupprothese.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Schoon-besmette ingreep</h4>
            <p className="text-amber-700 text-sm">Grijzer gebied: het openen van een niet-steriele lichaamsholte zonder aanwijzingen van infectie. Voorbeeld: appendicitis waarbij de ingreep plaatsvindt in een niet-geïnfecteerd gebied.</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Vuile ingrepen</h4>
            <p className="text-red-700 text-sm">Typisch bij traumapatiënten, bijvoorbeeld een darmperforatie. Appendicitis is een goed voorbeeld van een infectie waarbij de ingreep plaatsvindt in een geïnfecteerd gebied.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07POWIClassificatieSummary
