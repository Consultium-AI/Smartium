import { ListChecks } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20DifferentiaaldiagnoseSummary = () => {
  const tableOfContents = [{ id: 'dd', title: 'Differentiaaldiagnose', icon: ListChecks }]
  return (
    <SummaryLayout
      title="Differentiaaldiagnose diarree"
      description="Bacteriele, virale en parasitaire oorzaken van diarree."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 20"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image20"
    >
      <section id="dd" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ListChecks className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Differentiaaldiagnose</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Bacterieel: Salmonella, Campylobacter, Shigella. Viraal: rotavirus, norovirus, adenovirus, astrovirus. Parasitair: Giardia, Cryptosporidium. Voedselallergie veroorzaakt geen acute gastro-enteritis met koorts.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image20DifferentiaaldiagnoseSummary
