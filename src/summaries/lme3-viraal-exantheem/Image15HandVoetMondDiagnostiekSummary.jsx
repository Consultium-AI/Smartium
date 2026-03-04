import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15HandVoetMondDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'diagnostiek', title: 'Diagnostiek hand-voet-mondziekte', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Hand-voet-mondziekte – Diagnostiek"
      description="Hoe wordt de diagnose hand-voet-mondziekte gesteld? Kliniek en PCR."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 15"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image15"
    >
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek hand-voet-mondziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Primaire diagnostiek</h4>
            <p className="text-primary-700 text-sm m-0">
              De diagnose wordt meestal op het typische klinische beeld gesteld.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Optioneel aanvullend onderzoek</h4>
            <p className="text-amber-700 text-sm m-0">
              Eventueel kunnen enterovirussen door middel van PCR aangetoond worden in <strong>blaasjesvocht</strong>, een <strong>keeluitstrijk</strong> of <strong>feces</strong>.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15HandVoetMondDiagnostiekSummary
