import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14ZwangereVrouwSummary = () => {
  const tableOfContents = [
    { id: 'zwangerschap', title: 'Scabiës bij zwangerschap', icon: Syringe },
    { id: 'zuigelingen', title: 'Zuigelingen', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Scabiës bij zwangerschap en zuigelingen"
      description="Benzoylbenzoaat als veiligste optie; ivermectine en permetrine contra-indicaties."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image14"
    >
      <section id="zwangerschap" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Zwangerschap
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Ivermectine tabletten</strong> mogen in de zwangerschap niet gebruikt worden. <strong>Permetrine 5% crème</strong> kan waarschijnlijk veilig gebruikt worden, maar in theorie zou relevante absorptie kunnen optreden (zie Farmacotherapeutisch Kompas).
          </p>
          
          <div className="p-5 bg-emerald-50 rounded-xl border-l-4 border-emerald-400">
            <h4 className="font-bold text-emerald-800 mb-2">Veiligste optie</h4>
            <p className="text-emerald-700 m-0">
              De <strong>meest veilige behandeling</strong> bij zwangerschap is <strong>benzoylbenzoaat-smeersel 25%</strong> op dag 1, 2 en 8, 9.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="zuigelingen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Zuigelingen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor <strong>zuigelingen &lt;4 kg</strong> geldt hetzelfde: benzoylbenzoaat is de meest veilige optie. Ivermectine wordt bij zuigelingen niet aanbevolen.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14ZwangereVrouwSummary
