import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18LichamelijkEliseSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'lo', title: 'Lichamelijk onderzoek Elise', icon: Stethoscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Lichamelijk onderzoek Elise"
      description="Bevindingen van het lichamelijk onderzoek bij Elise."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 18"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image18"
    >
      <section id="lo" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Lichamelijk onderzoek Elise</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Bevindingen bij Elise: alert, vitale parameters normaal, buik soepel. Geen tekenen van ernstige dehydratie. Thuisbehandeling met ORS is mogelijk.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18LichamelijkEliseSummary
