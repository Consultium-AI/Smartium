import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12VijfdeZiekteDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'diagnostiek', title: 'Diagnostiek vijfde ziekte', icon: Stethoscope },
    { id: 'lab', title: 'Laboratoriumdiagnostiek', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Vijfde ziekte – Diagnostiek"
      description="Diagnostiek van erythema infectiosum: kliniek, antistoffen en PCR."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image12"
    >
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek vijfde ziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Primaire diagnostiek</h4>
            <p className="text-primary-700 text-sm m-0">
              Erythema infectiosum wordt voornamelijk gediagnosticeerd op basis van de kenmerkende klinische presentatie, vooral de karakteristieke gezichtsuitslag.
            </p>
          </div>
        </div>
      </section>

      <section id="lab" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Laboratoriumdiagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Detectie van <strong>IgM-antilichamen</strong> tegen parvovirus B19 wijst op een recente infectie, terwijl <strong>IgG-antilichamen</strong> wijzen op een vroegere infectie of immuniteit.
          </p>
          
          <p>
            Met <strong>PCR</strong> kan parvovirus B19-DNA in het bloed gedetecteerd worden en is nuttig bij immuungecompromitteerde patiënten of wanneer de diagnose onzeker is.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-amber-400">
            <p className="text-slate-600 text-sm m-0">
              Parvovirus B19-infecties kunnen leiden tot een milde of soms ernstige <strong>anemie</strong> door een afname van reticulocyten.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12VijfdeZiekteDiagnostiekSummary
