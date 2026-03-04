import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19OorzakenPetechienSummary = () => {
  const tableOfContents = [
    { id: 'mechanisch', title: 'Mechanische oorzaken', icon: Target },
    { id: 'niet-infectieus', title: 'Niet-infectieuze aandoeningen', icon: Target },
    { id: 'infectieus', title: 'Infectieziekten', icon: Target },
  ]

  return (
    <SummaryLayout
      title="Overzicht oorzaken van petechiën"
      description="Mechanische, niet-infectieuze en infectieuze oorzaken van petechiën en vergelijkbare huidbeelden."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 19"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image19"
    >
      <section id="mechanisch" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            1. Mechanische oorzaken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Trauma aan de huid door knijpen of zuigen</li>
            <li>Excessief hoesten, overgeven of persen (bevalling, dronkenschap, gewichtheffen)</li>
            <li>Toepassen van een tourniquet</li>
            <li>Zonverbranding</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="niet-infectieus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            2. Niet-infectieuze aandoeningen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Vitamine C-tekort (scheurbuik), vitamine K-tekort, kwashiorkor</li>
            <li>Leukemie, trombocytopenie, aplastische anemie</li>
            <li>Von Willebrand-ziekte, stollingsfactordeficiëntie</li>
            <li>Lupus, Sjögren, Henoch-Schönlein purpura</li>
            <li>Ehlers-Danlos-syndroom</li>
            <li>Straling, vetembolie, coeliakie</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="infectieus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            3. Infectieziekten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bacteriële infecties:</strong> Neisseria meningitidis, bacteriële endocarditis, Rocky Mountain spotted fever</li>
            <li><strong>Virale infecties:</strong> Dengue, Ebola, Marburg, CMV, H1N1 (griep)</li>
            <li>Sommige parasitaire infecties</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19OorzakenPetechienSummary
