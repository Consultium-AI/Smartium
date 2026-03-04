import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24FramCasusSummary = ({ standalone = true }) => {
  const toc = [{ id: 'casus', title: 'FRAM – Casus', icon: Stethoscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="FRAM – Casus"
      description="Voorbeeld: huisarts meldt patiënt aan voor bloedonderzoek."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 24"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image24"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM – Casus</h2>
        <p className="text-slate-700 mb-4">Functie: De huisarts meldt de patiënt aan voor bloedonderzoek (vermoeden anemie).</p>
        <div className="space-y-2 text-slate-700 text-sm">
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Input:</strong> Vermoeide patiënt (aanleiding)</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Output:</strong> Afspraak bij praktijkondersteuner</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Controle:</strong> Actieve diagnose patiënt (voorgeschiedenis)</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Bron:</strong> NHG-richtlijn anemie</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Tijd:</strong> Rooster praktijkondersteuner</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Voorwaarde:</strong> Geen prikangst</div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24FramCasusSummary
