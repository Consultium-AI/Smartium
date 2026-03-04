import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image26BerekenenRSummary = () => {
  const toc = [{ id: 'berekenen', title: 'Berekenen van R', icon: Calculator }]
  return (
    <SummaryLayout
      title="Berekenen van het R-getal"
      description="Van ziekenhuisopnames naar gerapporteerde infecties (12 juni 2020)."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 26"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image26"
    >
      <section id="berekenen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Twee methodes</h2>
        <p className="text-slate-700 mb-4">Op 12 juni 2020: overgang van R op basis van ziekenhuisopnames naar gerapporteerde infecties.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>Ziekenhuisopnames:</strong> betrouwbaar vroeg, maar vertraging en lagere aantallen (meer onzekerheid).
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Gerapporteerde infecties:</strong> actueler en hogere aantallen, maar bias door testcapaciteit en testbereidheid.
          </div>
        </div>
        <p className="text-slate-700 mt-4 text-sm">R op basis van gerapporteerde infecties werd het meest gebruikt voor beleid.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image26BerekenenRSummary
