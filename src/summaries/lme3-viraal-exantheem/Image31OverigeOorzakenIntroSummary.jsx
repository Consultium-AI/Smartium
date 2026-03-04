import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image31OverigeOorzakenIntroSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Overige oorzaken van rash', icon: FileText },
  ]

  return (
    <SummaryLayout
      title="Overige oorzaken van rash bij kinderen"
      description="Naast infectieuze oorzaken zijn er ook andere oorzaken van rash bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 31"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image31"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Overige oorzaken van rash bij kinderen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ter voorbereiding voor deze e-learning is het lezen van de opgegeven literatuur noodzakelijk. Naast de kinderziektes die rash geven en door een infectie worden veroorzaakt, zijn er ook andere oorzaken te bedenken van rash bij kinderen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kenmerk van rash bij kinderen</h4>
            <p className="text-primary-700 text-sm m-0">
              De meeste rashes bij kinderen zijn onschuldig en gaan vanzelf over.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Andere oorzaken</h4>
            <p className="text-amber-700 text-sm mb-2">
              Rashes komen veel meer bij kinderen voor dan bij volwassenen en zijn gelukkig meestal vrij onschuldig en self-limiting van aard. Hoewel infectieuze oorzaken een groot deel innemen, zijn er ook vele andere oorzaken:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Geneesmiddelenreacties</li>
              <li>Uitingen van atopie (eczeem) of auto-immuunziekten</li>
              <li>Reactie op een vaccinatie (immunologische oorzaak)</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image31OverigeOorzakenIntroSummary
