import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image28RisicosLageVaccinatiegraadSummary = ({ standalone = true }) => {
  const toc = [{ id: 'formule', title: 'Formule kritische vaccinatiegraad', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Formule voor de kritische vaccinatiegraad"
      description="f = 1 − 1/R₀ – afleiding en voorbeelden."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 28"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image28"
    >
      <section id="formule" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Formule f = 1 − 1/R₀</h2>
        <p className="text-slate-700 mb-4">De kritische vaccinatiegraad f is het minimum zodat (1 − f) × R₀ &lt; 1. Dus f &gt; 1 − 1/R₀. Deze formule is belangrijk om te onthouden.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-lg text-sm">
            <thead className="bg-primary-100"><tr><th className="px-4 py-2 text-left">Ziekte</th><th className="px-4 py-2 text-left">R₀</th><th className="px-4 py-2 text-left">f</th></tr></thead>
            <tbody className="text-slate-700">
              <tr><td className="px-4 py-2 border-t">Mazelen</td><td>12–18</td><td>92–94%</td></tr>
              <tr><td className="px-4 py-2 border-t">Bof</td><td>10–12</td><td>90–92%</td></tr>
              <tr><td className="px-4 py-2 border-t">Polio, kinkhoest, rodehond</td><td>5–7</td><td>80–86%</td></tr>
              <tr><td className="px-4 py-2 border-t">Pokken</td><td>4–6</td><td>75–83%</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image28RisicosLageVaccinatiegraadSummary
