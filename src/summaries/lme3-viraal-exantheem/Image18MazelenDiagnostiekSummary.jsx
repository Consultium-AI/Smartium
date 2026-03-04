import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18MazelenDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'kliniek', title: 'Klinische herkenning', icon: Stethoscope },
    { id: 'lab', title: 'Laboratoriumbevestiging', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Mazelen – Diagnostiek"
      description="Klinische herkenning van mazelen en het belang van laboratoriumbevestiging."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 18"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image18"
    >
      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische herkenning
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Door een arts die ervaring heeft met mazelen is een klassiek mazelenbeeld met hoge koorts, hoesten, conjunctivitis, Koplikse vlekjes en een grofvlekkig exantheem beginnend achter de oren en in het gezicht te herkennen.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Uitdaging</h4>
            <p className="text-amber-700 text-sm m-0">
              Mazelen is echter een zeldzame ziekte geworden en verloopt lang niet altijd volgens het klassieke patroon, waardoor mazelen klinisch gemakkelijk verward kan worden met andere exantheemziekten.
            </p>
          </div>
        </div>
      </section>

      <section id="lab" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Laboratoriumbevestiging
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Daarom is bij het vermoeden van mazelen laboratoriumbevestiging geïndiceerd.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              Dit kan het beste en snelste gebeuren door een <strong>PCR op keeluitstrijk, speeksel of urine</strong> in te zetten.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18MazelenDiagnostiekSummary
