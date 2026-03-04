import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie virale gastro-enteritis', icon: LayoutList },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Virale verwekkers van gastro-enteritis"
      description="Inleiding op de module: aspecten van virale gastro-enteritis via vragen en casussen."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <LayoutList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie virale gastro-enteritis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm mb-3">
              In deze module komen de verschillende aspecten van virale gastro-enteritis aan bod. Aan de hand van vragen en een aantal casussen worden belangrijke aspecten doornomen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Het is verstandig om eerst de e-clip gastro-enteritis door te nemen. Optioneel: Leerboek microbiologie en infectieziekten, vijfde druk, pagina 145-148 en 155-156.
            </p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-1">
            {[
              { title: 'Virale gastro-enteritis' },
              { title: 'Diarree bij een patient op de afdeling hematologie' },
              { title: 'Ouders zijn bezorgd: hun dochter van 11 maanden heeft koorts en diarree' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="text-primary-600 font-bold">{i + 1}.</span>
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
