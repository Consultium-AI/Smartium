import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16HandVoetMondBeleidSummary = () => {
  const tableOfContents = [
    { id: 'beleid', title: 'Beleid hand-voet-mondziekte', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Hand-voet-mondziekte – Beleid"
      description="Behandeling van hand-voet-mondziekte: ondersteunende zorg."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 16"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image16"
    >
      <section id="beleid" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Beleid hand-voet-mondziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              De behandeling is <strong>ondersteunend</strong> en gericht op pijnbestrijding en letten op goede vochtintake.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16HandVoetMondBeleidSummary
