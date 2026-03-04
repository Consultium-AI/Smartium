import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24RoodvonkDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'diagnostiek', title: 'Diagnostiek roodvonk', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Roodvonk – Diagnostiek"
      description="Diagnostiek van roodvonk: kweek en serologie."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 24"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image24"
    >
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek roodvonk
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Met een kweek van de keel kan een groep A-streptokok aangetoond worden.
          </p>
          
          <p>
            Serologisch kan een titerstijging worden aangetoond tegen de bacterie door middel van het aantonen van antistoffen tegen de antigenen <strong>streptolysine-O</strong> en <strong>DNAseB</strong>.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              Beide tests zijn niet nodig als de klinische diagnose roodvonk duidelijk is.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24RoodvonkDiagnostiekSummary
