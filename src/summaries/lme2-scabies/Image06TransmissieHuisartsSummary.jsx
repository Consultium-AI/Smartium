import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06TransmissieHuisartsSummary = () => {
  const tableOfContents = [
    { id: 'transmissie', title: 'Transmissie-eisen', icon: Stethoscope },
    { id: 'incubatie', title: 'Incubatietijd', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Transmissie scabiës – Huidcontact en incubatietijd"
      description="Langer dan 15 minuten huid-op-huid contact nodig; eerste besmetting: klachten na 2-6 weken."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image06"
    >
      <section id="transmissie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmissie-eisen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor transmissie van scabiës is <strong>langer dan 15 minuten huid-op-huid contact</strong> nodig. Kort contact tijdens een consult (bijv. lichamelijk onderzoek) is onvoldoende voor besmetting.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Klinische implicatie</h4>
            <p className="text-rose-700 text-sm m-0">
              Een huisarts die scabiës diagnosticeert bij een patiënt loopt tijdens het consult geen significant risico op besmetting. Krabben op de bank &apos;s avonds is niet het gevolg van besmetting door de patiënt.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="incubatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Incubatietijd
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een <strong>eerste besmetting</strong> ontstaan de klachten pas na <strong>2-6 weken</strong>. Bij een herbesmetting kunnen klachten sneller optreden door sensibilisatie.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06TransmissieHuisartsSummary
