import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11EmpirischeAntibioticaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'empirisch', title: 'Empirische antibiotica', icon: Pill }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Waarom infectiefocus zoeken – Empirische antibiotica"
      description="Keuze van empirische antibiotica op basis van infectiefocus."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image11"
    >
      <section id="empirisch" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Empirische antibiotica</h2>
        <p className="text-slate-700 mb-4">De keuze van empirische antibiotica hangt af van de vermoedelijke infectiefocus. Verschillende foci vereisen verschillende spectrum:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Long: pneumonie – breed spectrum tegen pneumokokken, atypische verwekkers</li>
          <li>Abdomen: buikinfectie – anaeroben, gram-negatieven</li>
          <li>Urinewegen: pyelonefritis – gram-negatieven, E. coli</li>
          <li>Bloedbaan/katheter: Staphylococcus aureus, coagulase-negatieve stafylokokken</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image11EmpirischeAntibioticaSummary
