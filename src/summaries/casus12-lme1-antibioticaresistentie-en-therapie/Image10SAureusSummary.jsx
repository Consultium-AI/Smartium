import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10SAureusSummary = ({ standalone = true }) => {
  const toc = [{ id: 'saureus', title: 'Resistentiemechanisme bij S. aureus', icon: Bug }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Welk resistentiemechanisme bij S. aureus?"
      description="PBP2a-modificatie als oorzaak van resistentie voor alle beta-lactam antibiotica."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image10"
    >
      <section id="saureus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Resistentiemechanisme bij S. aureus</h2>
        <p className="text-slate-700 mb-4">Wanneer alle beta-lactam antibiotica (flucloxacilline, Augmentin, ceftriaxon, meropenem) onwerkzaam zijn bij een S. aureus-stam, is het resistentiemechanisme <strong>modificatie van PBP2 naar PBP2a</strong>.</p>
        <p className="text-slate-700 mb-4">De bacterie heeft zijn PBP2 (penicilline-bindend eiwit) gemodificeerd naar PBP2a, waardoor de beta-lactamring van deze antibiotica niet meer kan binden. Eenvoudige beta-lactamasen, ESBL en carbapenemase komen bij S. aureus niet voor (ESBL en carbapenemase alleen bij gramnegatieven).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10SAureusSummary
