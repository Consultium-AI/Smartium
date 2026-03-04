import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23RotavirusvaccinSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'vaccin', title: 'Rotavirusvaccin', icon: Syringe }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Rotavirusvaccin"
      description="Schema en contra-indicaties van het rotavirusvaccin in het RVP."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 23"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image23"
    >
      <section id="vaccin" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Rotavirusvaccin</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Schema RVP: start 6-9 weken, tweede dosis met 3 maanden. Oraal vaccin. Contra-indicaties: invaginatie in de voorgeschiedenis, ernstige immuundeficiëntie, allergie voor bestanddelen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image23RotavirusvaccinSummary
