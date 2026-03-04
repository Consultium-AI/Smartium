import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05VolgordeMeestVoorkomendSummary = ({ standalone = true }) => {
  const toc = [{ id: 'volgorde', title: 'Volgorde van meest naar minst voorkomend', icon: BarChart3 }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Volgorde zorggerelateerde infecties – Meest naar minst voorkomend"
      description="De volgorde van de vier meest voorkomende zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image05"
    >
      <section id="volgorde" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Volgorde van meest naar minst voorkomend</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De vier meest voorkomende zorggerelateerde infecties, gerangschikt van meest naar minst frequent:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700 font-medium">
          <li>Postoperatieve wondinfectie (POWI)</li>
          <li>Onderste luchtweginfectie</li>
          <li>Urineweginfectie</li>
          <li>Lijninfectie</li>
        </ol>
      </section>
    </SummaryLayout>
  )
}

export default Image05VolgordeMeestVoorkomendSummary
