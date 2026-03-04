import { List } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06TermenSummary = () => {
  const toc = [{ id: 'termen', title: 'Termen en definities', icon: List }]
  return (
    <SummaryLayout
      title="Sepsis, septische shock, bacteriemie en andere termen"
      description="Onderscheid tussen sepsis, septische shock, bacteriemie, orgaandysfunctie, intravasale infectie en SIRS."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image06"
    >
      <section id="termen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Termen en definities</h2>
        <p className="text-slate-700 mb-4">Het is belangrijk de verschillende termen van elkaar te onderscheiden. Er is een verschil tussen sepsis en bacteriemie.</p>
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Sepsis:</strong> Levensbedreigend orgaanfalen, veroorzaakt door een ontregelde respons van de gastheer op een infectie.
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Septische shock:</strong> Ernstige complicatie van sepsis, gekenmerkt door acuut circulatoir falen met hypotensie die niet reageert op voldoende vochtresuscitatie.
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Bacteriemie:</strong> Aanwezigheid van bacteriën in de bloedbaan.
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>Orgaandysfunctie:</strong> Organen kunnen niet meer adequaat functioneren door schade (nieren, lever, longen, hart).
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <strong>Intravasale infectie:</strong> Infectie binnen de bloedvaten of circulatie.
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong>SIRS:</strong> Klinisch syndroom met ontstekingsreactie (koorts, tachycardie, tachypneu, leukocytose); kan door sepsis of andere aandoeningen.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06TermenSummary
