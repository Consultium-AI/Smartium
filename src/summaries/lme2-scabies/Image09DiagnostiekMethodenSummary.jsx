import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09DiagnostiekMethodenSummary = () => {
  const tableOfContents = [
    { id: 'methoden', title: 'Diagnostische methoden', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Scabiës diagnostiek – Methoden"
      description="Anamnese, lichamelijk onderzoek, dermatoscopie, microscopie (KOH) en PCR."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image09"
    >
      <section id="methoden" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostische methoden
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Anamnese</strong> – jeuk, contact met besmette personen, woon-/leefsituatie</li>
            <li><strong>Lichamelijk onderzoek</strong> – inspectie van de huid, voorkeurslocaties</li>
            <li><strong>Dermatoscopie</strong> – gangetjes met delta-sign</li>
            <li><strong>Microscopie (KOH)</strong> – schraapsel uit gangetje direct onder de microscoop; mijten en eitjes aantonen</li>
            <li><strong>PCR</strong> – polymerase chain reaction van huidschraapsel</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09DiagnostiekMethodenSummary
