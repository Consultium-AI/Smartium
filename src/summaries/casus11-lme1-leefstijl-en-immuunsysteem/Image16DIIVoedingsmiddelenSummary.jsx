import { Apple } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16DIIVoedingsmiddelenSummary = () => {
  const toc = [{ id: 'dii-voeding', title: 'DII – Pro- en anti-inflammatoire voeding', icon: Apple }]
  return (
    <SummaryLayout
      title="Voeding en immuunsysteem (6) – DII en voedingsmiddelen"
      description="Welke voedingsmiddelen pro- of anti-inflammatoir zijn."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image16"
    >
      <section id="dii-voeding" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">DII en voedingsmiddelen</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Pro-inflammatoir:</strong> koolhydraten, verzadigde en transvetzuren, hoog totaal energieverbruik
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <strong>Anti-inflammatoir:</strong> vezels, PUFA, vitamine A/C/D/E, betacaroteen, groene en zwarte thee, laag totaal energieverbruik
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16DIIVoedingsmiddelenSummary
