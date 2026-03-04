import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15PneumonieTabelSummary = () => {
  const tableOfContents = [
    { id: 'tabel', title: 'Classificatie longontsteking', icon: Stethoscope },
    { id: 'pneumokok', title: 'Rol van S. pneumoniae', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="S. pneumoniae en longontsteking"
      description="Prevalente oorzaak van acute community-acquired pneumonie in alle leeftijdsgroepen."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 15"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image15"
    >
      <section id="tabel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Classificatie longontsteking
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de tabel voor community-acquired pneumonie valt op dat <strong>S. pneumoniae (pneumokok)</strong> als belangrijkste verwekker wordt genoemd bij: gezonde jongeren, ouderen/COPD-patiënten, contact met dieren/buitenland, en jonge kinderen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="pneumokok" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rol van S. pneumoniae
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 m-0">
              <strong>S. pneumoniae</strong> is een prevalente oorzaak van acute, community-acquired pneumonie in alle leeftijdsgroepen. NB: S. pneumoniae dragerschap (dus niet infectie) komt frequent voor en alle leeftijdsgroepen zijn at risk voor een complicatie met deze bacterie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15PneumonieTabelSummary
