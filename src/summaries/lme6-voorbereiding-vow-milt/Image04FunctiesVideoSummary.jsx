import { PlayCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04FunctiesVideoSummary = () => {
  const tableOfContents = [
    { id: 'functies', title: 'Functies van de milt', icon: PlayCircle },
  ]

  return (
    <SummaryLayout
      title="Functies van de milt"
      description="De milt filtert bloed, verwijdert oude erytrocyten en initieert immuunrespons tegen antigenen."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image04"
    >
      <section id="functies" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <PlayCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Functies van de milt
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijkste functies</h4>
            <p className="text-primary-700 text-sm m-0">
              De milt filtert het bloed, en verwijdert daarbij oude erytrocyten. Ook worden antigenen die in het bloed aanwezig zijn uit het bloed gefilterd, waarna hiertegen een immuunrespons op gang wordt gebracht.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Let op</h4>
            <p className="text-amber-700 text-sm m-0">
              De milt filtert het bloed, niet de lymfe. B- en T-lymfocyten worden niet in de milt gevormd, maar de milt wekt wel een immuunrespons op tegen antigenen die in het bloed aanwezig zijn.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04FunctiesVideoSummary
