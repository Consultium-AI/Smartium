import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18PetechienDefinitieSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Definitie en herkenning', icon: Target },
    { id: 'belangrijk', title: 'Belangrijk', icon: Target },
    { id: 'differentiaal', title: 'Andere oorzaken', icon: Target },
  ]

  return (
    <SummaryLayout
      title="Petechiën – Definitie en herkenning"
      description="Kleine niet-wegdrukbare puntbloedingen, glasproef en differentiaaldiagnose."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 18"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image18"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Definitie en herkenning
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Petechiën</strong> – kleine, niet-wegdrukbare puntbloedingen (0,5–1 mm)</li>
            <li><strong>Purpura/ecchymosen</strong> – grotere bloedingen in de huid</li>
            <li><strong>Glasproef:</strong> petechiën vervagen niet bij druk</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="belangrijk" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belangrijk
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <p className="text-rose-700 font-medium m-0">
              Hoge koorts + petechiën → denk aan meningokokkensepsis of -meningitis. Dit is levensbedreigend → direct verwijzen naar het ziekenhuis! Bij koorts en petechiën altijd eerst meningokokken uitsluiten.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="differentiaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Andere oorzaken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Infectieuze endocarditis (ander beloop en klachtenpatroon)</li>
            <li>Niet-infectieuze oorzaken (stollingsstoornissen, trauma, vasculitis)</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18PetechienDefinitieSummary
