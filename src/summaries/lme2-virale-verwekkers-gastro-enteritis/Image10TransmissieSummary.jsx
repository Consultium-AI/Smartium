import { Share2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10TransmissieSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'trans', title: 'Transmissieroute', icon: Share2 }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Transmissieroute virale gastro-enteritis"
      description="Feco-orale overdracht, infectiedosis en aerogene verspreiding."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image10"
    >
      <section id="trans" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Share2 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Transmissieroute</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Virale gastro-enteritis wordt voornamelijk overgedragen via de feco-orale route.</p>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Lage infectiedosis</h4>
            <p className="text-teal-700 text-sm m-0">Norovirus en rotavirus hebben een zeer lage infectiedosis.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Norovirus aerogene verspreiding</h4>
            <p className="text-amber-700 text-sm m-0">Norovirus kan via braaksel aerogeen worden overgedragen.</p>
          </div>
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Preventie</h4>
            <p className="text-rose-700 text-sm m-0">Handhygiene en isolatiemaatregelen zijn essentieel.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10TransmissieSummary
