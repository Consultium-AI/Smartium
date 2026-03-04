import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10ZesdeZiekteBeleidSummary = () => {
  const tableOfContents = [
    { id: 'beleid', title: 'Beleid zesde ziekte', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Zesde ziekte – Beleid"
      description="Behandeling van de zesde ziekte (exanthema subitum) bij gezonde kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image10"
    >
      <section id="beleid" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Beleid zesde ziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              Er is geen specifieke behandeling nodig voor de zesde ziekte bij een verder gezond kind; symptomatische behandeling kan met koortsremmende middelen zoals <strong>paracetamol</strong>.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10ZesdeZiekteBeleidSummary
