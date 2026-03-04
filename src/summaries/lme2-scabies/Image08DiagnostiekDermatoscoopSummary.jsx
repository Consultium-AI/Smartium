import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08DiagnostiekDermatoscoopSummary = () => {
  const tableOfContents = [
    { id: 'dermatoscopie', title: 'Dermatoscopie', icon: Stethoscope },
    { id: 'gangetjes', title: 'Gangetjes', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Scabiës diagnostiek – Dermatoscopie"
      description="Dermatoscopie als diagnostisch hulpmiddel; herkenning van gangetjes en delta-sign."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image08"
    >
      <section id="dermatoscopie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dermatoscopie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Dermatoscopie</strong> is een belangrijk hulpmiddel bij de diagnostiek van scabiës. Met een dermatoscoop (handheld apparaat voor vergroting en belichting van de huid) kunnen karakteristieke afwijkingen worden gezien.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="gangetjes" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Karakteristieke bevindingen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Onder de dermatoscoop zijn <strong>fijne lineaire structuren (gangetjes/burrows)</strong> zichtbaar – de karakteristieke gangetjes van <em>Sarcoptes scabiei</em>. Aan het einde van het gangetje kan een <strong>delta-sign</strong> worden gezien (de mijt).
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08DiagnostiekDermatoscoopSummary
