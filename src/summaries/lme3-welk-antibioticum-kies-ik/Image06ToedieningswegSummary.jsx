import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06ToedieningswegSummary = () => {
  const tableOfContents = [
    { id: 'toediening', title: 'Toedieningsweg en dosering', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Toedieningsweg en dosering"
      description="Twee voorwaarden voor genezing: farmacokinetiek en farmacodynamiek."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image06"
    >
      <section id="toediening" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Toedieningsweg en dosering
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Na het kiezen van een empirisch middel op grond van de meest voorkomende verwekkers, moet je bepalen wat de toedieningsweg wordt en in welke dosering je het middel gaat geven.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Twee voorwaarden voor genezing</h4>
            <ol className="list-decimal pl-6 space-y-2 text-teal-700 text-sm">
              <li><strong>Farmacokinetiek (PK):</strong> Het middel moet de ontstekingshaard of het getroffen orgaan in voldoende mate bereiken. Processen in het lichaam kunnen invloed hebben op het antibioticum.</li>
              <li><strong>Farmacodynamiek (PD):</strong> Het middel dient het oorzakelijk micro-organisme te kunnen doden of de groei ervan te remmen (gevoelig zijn). PD is het effect van het antibioticum op de verwekker.</li>
            </ol>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Volgende stap</h4>
            <p className="text-amber-700 text-sm m-0">
              Alvorens op farmacokinetiek en -dynamiek in te gaan, maken we eerst een uitstapje naar antibacteriele gevoeligheid.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06ToedieningswegSummary
