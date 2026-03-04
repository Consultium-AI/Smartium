import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Medicatieveiligheid"
      description="Overzicht van de hoofdstukken in de medicatieveiligheid-module."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">Welkom bij deze e-module over medicatieveiligheid! Medicatieveiligheid draait om het minimaliseren van geneesmiddel-gerelateerde problemen, zoals medicatiefouten. In deze module nemen wij je mee op een reis door de wereld van veiligheid binnen de zorg.</p>
        <p className="text-slate-700 mb-4">We bespreken niet alleen hoe vaak en wanneer medicatiefouten voorkomen, maar ook hoe je deze kunt melden, analyseren en ermee om kunt gaan. Daarnaast leer je hoe proces- en systeemdenken helpt om fouten te voorkomen én hoe je krachten binnen een proces kunt identificeren en benutten.</p>
        <h3 className="font-bold text-slate-800 mb-2">Hoofdstukken</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Safety I en Safety II</li>
          <li>Stappen medicatieproces</li>
          <li>Medicatiefouten identificeren, melden, analyseren en evalueren</li>
          <li>Onderzoeksmethoden</li>
          <li>Second victim</li>
          <li>Systeem- en procesdenken</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary
