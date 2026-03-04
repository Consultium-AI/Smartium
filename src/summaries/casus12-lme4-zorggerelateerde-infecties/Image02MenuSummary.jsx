import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Zorggerelateerde infecties"
      description="Overzicht van de hoofdstukken in de module zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200 mb-6">
          <h4 className="font-bold text-primary-800 mb-2">Introductie thema</h4>
          <p className="text-primary-700 text-sm mb-2">Voorwaardelijk voor een beter begrip van deze module is beheersing van de basisprincipes van infectiepreventie (zie LM Infectiepreventie bij casus 3 blok 4). Bestudeer het hoofdstuk uit Hoepelman et al. zoals genoemd in de introductie.</p>
          <p className="text-primary-700 text-sm m-0">Hierna maak je een aantal vragen en opdrachten in deze module. Hierdoor oefen je de toepassing van de principes van infectiepreventie.</p>
        </div>
        <h3 className="font-bold text-slate-800 mb-2">Hoofdstukken</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>1. Wat zijn zorggerelateerde infecties?</li>
          <li>2. Postoperatieve wondinfecties</li>
          <li>3. Preventieve maatregelen</li>
          <li>4. Urineweginfecties</li>
          <li>5. De bron van de infectie</li>
          <li>6. Terminologie</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
