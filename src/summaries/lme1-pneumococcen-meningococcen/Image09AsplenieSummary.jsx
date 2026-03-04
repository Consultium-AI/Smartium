import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09AsplenieSummary = () => {
  const tableOfContents = [
    { id: 'asplenie', title: 'Asplenie en infectierisico', icon: Stethoscope },
    { id: 'mechanismen', title: 'Mechanismen', icon: Stethoscope },
    { id: 'gekapseld', title: 'Belangrijke gekapselde bacteriën', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Asplenie en gekapselde bacteriën"
      description="Verhoogd infectierisico bij patiënten zonder milt en de rol van de milt bij opruimen van gekapselde bacteriën."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image09"
    >
      <section id="asplenie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Asplenie en infectierisico
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Verhoogd infectierisico bij patiënten zonder (functionele) milt.</strong> De milt is belangrijk voor het opruimen van gekapselde bacteriën. Bij afwezige of slecht werkende milt neemt het risico op ernstige infecties sterk toe.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="mechanismen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Mechanismen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Minder fagocytose:</strong> bacteriën worden minder goed uit het bloed gefilterd</li>
            <li><strong>Minder antilichaamproductie:</strong> vooral tegen polysacharide-antigenen</li>
            <li><strong>Verminderde opsonisatie:</strong> pathogenen worden minder goed &apos;gemarkeerd&apos; voor afweer</li>
            <li><strong>Verlies van marginale zone macrofagen:</strong> verzwakte eerste afweerlinie</li>
            <li><strong>Minder complementactivatie:</strong> tragere immuunreactie</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="gekapseld" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belangrijke gekapselde bacteriën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Streptococcus pneumoniae</li>
            <li>Neisseria meningitidis</li>
            <li>Haemophilus influenzae type B</li>
            <li>Streptococcus agalactiae (groep B)</li>
            <li>Streptococcus pyogenes (groep A)</li>
          </ul>
          <p className="text-slate-600 text-sm mt-4">
            Patiënten zonder milt worden geadviseerd zich te laten vaccineren tegen deze bacteriën.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09AsplenieSummary
