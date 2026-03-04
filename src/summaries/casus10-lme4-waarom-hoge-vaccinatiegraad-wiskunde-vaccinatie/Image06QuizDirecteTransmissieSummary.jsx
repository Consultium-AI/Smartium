import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06QuizDirecteTransmissieSummary = () => {
  const toc = [{ id: 'quiz', title: 'Quiz – Directe transmissie', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      title="Quiz – Directe transmissie bij RVP-ziekten"
      description="Welke ziekten uit het Rijksvaccinatieprogramma worden direct overgedragen?"
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image06"
    >
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Directe transmissie</h2>
        <p className="text-slate-700 mb-4">Bijna alle ziekten uit het Rijksvaccinatieprogramma worden direct overgedragen, meestal via fysiek contact (mond/handen) of via de lucht (hoesten/niezen).</p>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">Uitzondering: Tetanus</h4>
          <p className="text-amber-700 text-sm m-0">Tetanus wordt niet direct overgedragen. Besmetting vindt plaats via dierbeten of vuil in wonden. Tetanus is dus een voorbeeld van indirecte transmissie.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06QuizDirecteTransmissieSummary
