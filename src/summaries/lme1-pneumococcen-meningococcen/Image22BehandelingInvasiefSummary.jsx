import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22BehandelingInvasiefSummary = () => {
  const tableOfContents = [
    { id: 'abcde', title: 'ABCDE-methodiek', icon: Syringe },
    { id: 'antibiotica', title: 'Antibiotica', icon: Syringe },
    { id: 'dexamethason', title: 'Dexamethason', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Behandeling invasieve infecties"
      description="ABCDE-methodiek, antibioticakeuze, sterilisatietijden en rol van dexamethason."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 22"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image22"
    >
      <section id="abcde" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            ABCDE-methodiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Patiënten met invasieve pneumokokken- of meningokokkeninfecties zijn vaak ernstig ziek. De behandeling start volgens de <strong>ABCDE-methodiek</strong>: eerst vitale functies stabiliseren en monitoren (ademhaling, circulatie, bewustzijn, temperatuur, metabole status), pas daarna verdere diagnostiek en behandeling.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="antibiotica" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Antibiotica
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het is cruciaal om <strong>binnen het eerste uur</strong> een <strong>intraveneus breedspectrum antibioticum</strong> te starten, omdat de verwekker vaak nog niet bekend is. Antibioticakeuze volgens lokaal antibioticaboekje.
          </p>
          <p>
            <strong>Sterilisatie subarachnoïdale ruimte:</strong> meningokokken ~2 uur, pneumokokken 4–24 uur, streptokokken kan enkele dagen duren.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="dexamethason" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dexamethason
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Dexamethason</strong> vóór of gelijktijdig met eerste dosis antibiotica; remt inflammatie in CSF en zenuwweefselschade; vermindert mortaliteit en morbiditeit bij pneumokokkenmeningitis. Bij meningitis en septische shock weegt het voordeel op tegen het nadeel.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image22BehandelingInvasiefSummary
