import { ArrowDown } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05ZIVolgordeSummary = () => {
  const toc = [{ id: 'volgorde', title: 'Volgorde van meest naar minder vaak voorkomend', icon: ArrowDown }]
  return (
    <SummaryLayout
      title="Volgorde zorggerelateerde infecties"
      description="De 4 meest voorkomende zorggerelateerde infecties op volgorde van prevalentie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image05"
    >
      <section id="volgorde" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Volgorde van meest naar minder vaak voorkomend</h2>
        <p className="text-slate-700 mb-4">De volgende zorggerelateerde infecties staan op volgorde van meest naar minder vaak voorkomend:</p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li><strong>Postoperatieve wondinfectie (POWI)</strong> – meest voorkomend</li>
          <li>Onderste luchtweginfectie</li>
          <li>Urineweginfectie</li>
          <li><strong>Lijninfectie</strong> – minst voorkomend</li>
        </ol>
      </section>
    </SummaryLayout>
  )
}

export default Image05ZIVolgordeSummary
