import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21RubellaDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'diagnostiek', title: 'Diagnostiek rubella', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Rubella – Diagnostiek"
      description="Diagnostiek van rubella: weinig klinisch onderscheidende symptomen, IgM en PCR."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 21"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image21"
    >
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek rubella
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er zijn weinig klinisch onderscheidende symptomen bij rubella.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Bij verdenking op rubella</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li><strong>IgM-antistoffen</strong> kunnen worden bepaald in het serum</li>
              <li>Of een <strong>PCR</strong> verricht op een keeluitstrijk of urine</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image21RubellaDiagnostiekSummary
