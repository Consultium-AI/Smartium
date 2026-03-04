import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03MenuSummary = ({ standalone = true }) => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – De wiskunde van vaccinatie"
      description="Overzicht van de acht hoofdstukken in deze e-module."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image03"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">De module bestaat uit acht hoofdstukken:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>H1. Waarom wiskundige modellen in de infectieziekte-epidemiologie?</li>
          <li>H2. Het basisreproductiegetal R₀</li>
          <li>H3. Het SIR-model en z'n varianten</li>
          <li>H4. Een eenvoudige wiskundige formule voor R₀</li>
          <li>H5. Ter vergelijking: het effectief reproductiegetal R</li>
          <li>H6. De kritische vaccinatiegraad</li>
          <li>H7. Risico's van een te lage vaccinatiegraad</li>
          <li>H8. Complexere modellen: HPV-vaccinatie (optioneel)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image03MenuSummary
