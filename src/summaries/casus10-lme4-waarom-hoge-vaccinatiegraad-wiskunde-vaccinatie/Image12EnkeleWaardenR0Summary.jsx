import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12EnkeleWaardenR0Summary = () => {
  const toc = [{ id: 'waarden', title: 'Enkele R₀-waarden', icon: BarChart3 }]
  return (
    <SummaryLayout
      title="Enkele R₀-waarden voor bekende ziekten"
      description="Vergelijking van R₀ voor verschillende infectieziekten."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image12"
    >
      <section id="waarden" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">R₀-waarden</h2>
        <p className="text-slate-700 mb-4">Hoe hoger R₀, hoe besmettelijker de ziekte. Mazelen is een van de meest besmettelijke infectieziekten. Let op: verschillende bronnen kunnen (aanzienlijk) verschillende waarden geven.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-lg">
            <thead className="bg-primary-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-bold">Ziekte</th>
                <th className="px-4 py-2 text-left text-sm font-bold">R₀</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 text-sm">
              <tr><td className="px-4 py-2 border-t">Mazelen</td><td>12–18</td></tr>
              <tr><td className="px-4 py-2 border-t">Bof</td><td>10–12</td></tr>
              <tr><td className="px-4 py-2 border-t">Polio, kinkhoest, rodehond</td><td>5–7</td></tr>
              <tr><td className="px-4 py-2 border-t">Pokken</td><td>4–6</td></tr>
              <tr><td className="px-4 py-2 border-t">Spaanse griep (1918)</td><td>1.5–2.5</td></tr>
              <tr><td className="px-4 py-2 border-t">Ebola (2014)</td><td>1.4–1.8</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-700 text-sm mt-4">COVID-19: eerste schattingen ~2,5; bij Omicron tot wel 10.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12EnkeleWaardenR0Summary
