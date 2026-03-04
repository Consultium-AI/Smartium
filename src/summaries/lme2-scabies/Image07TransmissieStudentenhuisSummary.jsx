import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07TransmissieStudentenhuisSummary = () => {
  const tableOfContents = [
    { id: 'huisgenoten', title: 'Risico huisgenoten', icon: Stethoscope },
    { id: 'transmissieroutes', title: 'Transmissieroutes', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Transmissie scabiës – Studentenhuis"
      description="Hoge kans voor huisgenoten; transmissie via langdurig huidcontact of besmette bank/meubels."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image07"
    >
      <section id="huisgenoten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Risico huisgenoten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Huisgenoten hebben een hoge kans</strong> om ook scabiës te krijgen wanneer een huisgenoot gediagnosticeerd is. Dit geldt zeker voor partners die samen slapen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="transmissieroutes" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmissieroutes
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Bij <strong>langer dan 15 minuten huid-op-huid contact</strong> is er een kans op transmissie</li>
            <li>Je partner kan besmet zijn en het aan jou doorgeven</li>
            <li><strong>Indirecte besmetting</strong> via besmette bank of meubels (bijv. naast huisgenoten zitten) is mogelijk, zij het minder frequent dan direct huidcontact</li>
          </ul>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Praktijk</h4>
            <p className="text-primary-700 text-sm m-0">
              Bij een gediagnosticeerde huisgenoot in een studentenhuis: ja, je kunt scabiës krijgen door bij je partner te blijven slapen, of via contact met andere huisgenoten of besmette oppervlakken.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07TransmissieStudentenhuisSummary
