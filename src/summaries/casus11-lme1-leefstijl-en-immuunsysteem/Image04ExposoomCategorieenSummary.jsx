import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04ExposoomCategorieenSummary = () => {
  const toc = [{ id: 'categorieen', title: 'Drie categorieën van het exposoom', icon: Layers }]
  return (
    <SummaryLayout
      title="Exposoom (2) – Categorieën"
      description="Algemene externe, specifieke externe en specifieke interne factoren."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image04"
    >
      <section id="categorieen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Drie categorieën</h2>
        <p className="text-slate-700 mb-4">Het exposoom bestaat uit een grote diversiteit aan factoren, onderverdeeld in drie categorieën:</p>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>Algemene externe omgevingsfactoren:</strong> leefomgeving, inkomen, klimaat, sociale leefomgeving
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Specifieke externe omgevingsfactoren:</strong> blootstelling aan chemicaliën, voeding, leefstijl, stress
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Specifieke interne factoren:</strong> veroudering, microbioom, metabole processen
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04ExposoomCategorieenSummary
