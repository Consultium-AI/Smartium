import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image34ErythemaMultiformeSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Erythema multiforme', icon: Activity },
    { id: 'oorzaken', title: 'Oorzaken', icon: Activity },
    { id: 'behandeling', title: 'Behandeling', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Erythema multiforme"
      description="Immuungemedieerde rash met schietschijflesies, triggers en behandeling."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 34"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image34"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Erythema multiforme
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Deze vorm van rash met de typische <strong>schietschijflesies</strong> (rode, verheven laesies met donkerrode rand en grijzige binnenkant) noemen we <strong>erythema multiforme</strong>. Het is een immuungemedieerde rash die ontstaat als reactie op een eerder doorgemaakte infectie.
          </p>
        </div>
      </section>

      <section id="oorzaken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Oorzaken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Herpes simplex virus</li>
            <li>Mycoplasma pneumoniae</li>
            <li>Sommige auto-immuunziekten</li>
            <li>Geneesmiddelen en vaccinaties</li>
          </ul>
        </div>
      </section>

      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Behandeling is niet nodig bij milde vormen; het geneest dan zonder restverschijnselen. Bij uitgebreide vormen of als ook de lippen of mondholte meedoen wordt vooral immuunonderdrukkende therapie gebruikt zoals corticosteroïden en andere ontstekingsremmers.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-amber-400">
            <p className="text-slate-600 text-sm m-0">
              Het behandelen van de eventueel infectieuze trigger heeft geen zin meer, die is immers vaak al weg.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image34ErythemaMultiformeSummary
