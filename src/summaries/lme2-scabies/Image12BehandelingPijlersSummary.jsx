import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12BehandelingPijlersSummary = () => {
  const tableOfContents = [
    { id: 'pijlers', title: 'Drie behandelpijlers', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Scabiës behandeling – Drie behandelpijlers"
      description="Textielbehandeling, topische medicatie, orale medicatie en patiëntenvoorlichting."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image12"
    >
      <section id="pijlers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Drie behandelpijlers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">1. Textielbehandeling</h4>
              <p className="text-slate-600 text-sm m-0">
                Kleding, beddengoed en textiel wassen op 60°C of in een afgesloten zak bewaren om mijten te doden.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">2. Medicamenteuze behandeling</h4>
              <p className="text-slate-600 text-sm m-0">
                Topische behandeling (crème/zalf) en/of orale medicatie (ivermectine) volgens protocol.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
              <h4 className="font-bold text-slate-800 mb-2">3. Patiëntenvoorlichting</h4>
              <p className="text-slate-600 text-sm m-0">
                Instructies over toepassing, contactpersonen informeren en behandelen, en follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12BehandelingPijlersSummary
