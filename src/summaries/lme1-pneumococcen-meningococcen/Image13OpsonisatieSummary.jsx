import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13OpsonisatieSummary = () => {
  const tableOfContents = [
    { id: 'opsonisatie', title: 'Opsonisatie', icon: Syringe },
    { id: 'complement', title: 'Complement en inflammatie', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Werkingsmechanisme antilichamen – Opsonisatie"
      description="Hoe antilichamen van vaccins tegen gekapselde bacteriën werken via opsonisatie en complementactivatie."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image13"
    >
      <section id="opsonisatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Opsonisatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Antilichamen binden aan het oppervlak van bacteriën (zoals pneumokokken of meningokokken) en <strong>markeren ze voor vernietiging door het immuunsysteem</strong>. Dit proces heet <strong>opsonisatie</strong>. Complementfactoren, vooral <strong>C3b</strong>, kunnen ook direct aan bacteriën binden en als opsonine fungeren.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="complement" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Complementactivatie en inflammatoire cascade
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Complementactivatie (klassieke of alternatieve route) leidt tot splitsing van C3 en C5. Het <strong>membrane attack complex (MAC)</strong> vormt poriën in bacteriële membranen → bacteriële lysis. C3a en C5a zijn <strong>anafylatoxinen</strong> die macrofagen en neutrofielen activeren, vasculaire permeabiliteit verhogen en migratie van immuuncellen stimuleren. Pro-inflammatoire cytokines (TNF-α, IL-6) worden geproduceerd. IL-6 stimuleert de lever tot productie van acute-fase-eiwitten zoals <strong>CRP</strong> (ook opsonine). TNF-α en IL-6 veroorzaken koorts.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13OpsonisatieSummary
