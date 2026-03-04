import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11DefinitieveDiagnoseSummary = () => {
  const tableOfContents = [
    { id: 'diagnose', title: 'Definitieve diagnose', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Definitieve diagnose scabiës"
      description="Dermatoscopie met delta-sign, microscopie van schraapsel en PCR."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image11"
    >
      <section id="diagnose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Definitieve diagnose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een patiënt met jeuk en huidafwijkingen passend bij scabiës kan de definitieve diagnose op verschillende manieren worden gesteld:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Dermatoscopie</strong> – gangetjes zichtbaar met aan het einde een delta-sign (de mijt)</li>
            <li><strong>Microscopie</strong> – schraapsel uit een gangetje direct onder de microscoop onderzoeken; mijten en eitjes aantonen</li>
            <li><strong>PCR</strong> – PCR-onderzoek van huidschraapsel</li>
          </ol>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11DefinitieveDiagnoseSummary
