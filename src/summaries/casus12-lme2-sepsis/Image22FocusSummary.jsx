import { Crosshair } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22FocusSummary = ({ standalone = true }) => {
  const toc = [{ id: 'focus', title: 'Infectiefocus en behandeling', icon: Crosshair }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Infectiefocus en behandeling"
      description="Longen, abdomen, focuscontrole, empirische therapie en bloedkweken."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image22"
    >
      <section id="focus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Infectiefocus en behandeling</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Meest voorkomende foci: longen (~47%), abdomen (~20%)</li>
          <li>Focuscontrole: drainage, verwijdering katheters, chirurgie indien nodig</li>
          <li>Empirische therapie: afgestemd op vermoedelijke focus</li>
          <li>Bloedkweken: altijd afnemen vóór start antibiotica</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image22FocusSummary
