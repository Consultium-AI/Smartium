import { AlertTriangle, Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19MazelenBeleidSummary = () => {
  const tableOfContents = [
    { id: 'meldingsplicht', title: 'Meldingsplicht', icon: AlertTriangle },
    { id: 'contacten', title: 'Contacten', icon: AlertTriangle },
    { id: 'behandeling', title: 'Behandeling', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Mazelen – Beleid"
      description="Meldingsplicht, behandeling van contacten en het ontbreken van gerichte behandeling."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 19"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image19"
    >
      <section id="meldingsplicht" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meldingsplicht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              Mazelen is een <strong>meldingsplichtige ziekte</strong>; die door de arts binnen <strong>1 werkdag</strong> na het vaststellen van de diagnose gemeld moet worden aan de GGD.
            </p>
          </div>
        </div>
      </section>

      <section id="contacten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Contacten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Personen met een kwetsbare gezondheid die in contact zijn geweest met mazelen en niet gevaccineerd zijn kunnen dan alsnog een vaccinatie krijgen of specifieke antistoffen tegen mazelen toegediend krijgen.
          </p>
        </div>
      </section>

      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600 text-sm m-0">
              Er is verder geen gerichte behandeling voor mazelen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19MazelenBeleidSummary
