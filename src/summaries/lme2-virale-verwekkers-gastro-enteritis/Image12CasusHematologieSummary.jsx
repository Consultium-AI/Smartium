import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12CasusHematologieSummary = () => {
  const tableOfContents = [
    { id: 'casus', title: 'Casus hematologie – materiaal', icon: User },
  ]

  return (
    <SummaryLayout
      title="Casus hematologie – Materiaal"
      description="Patient met AML en diarree: keuze van materiaal voor diagnostiek."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image12"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <User className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus hematologie – materiaal
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Meneer Jansen heeft AML (acute myeloïde leukemie) en presenteert zich met diarree. Voor diagnostiek van virale gastro-enteritis is het juiste materiaal essentieel.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Materiaal voor diagnostiek</h4>
            <p className="text-teal-700 text-sm m-0">
              <strong>Faeces (ontlasting)</strong> is het aangewezen materiaal voor detectie van virale gastro-enteritis verwekkers (rotavirus, norovirus, adenovirus, astrovirus). Het virus wordt in hoge concentraties uitgescheiden in de ontlasting.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijke overweging</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij immuungecompromitteerde patienten (zoals bij AML) kunnen virale infecties ernstiger verlopen. Snelle diagnostiek is belangrijk voor adequate behandeling en infectiepreventie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12CasusHematologieSummary
