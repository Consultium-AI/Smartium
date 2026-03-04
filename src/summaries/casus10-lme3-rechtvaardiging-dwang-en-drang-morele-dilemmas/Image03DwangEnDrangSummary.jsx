import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03DwangEnDrangSummary = ({ standalone = true }) => {
  const toc = [{ id: 'begrippen', title: 'Dwang en drang', icon: Scale }]
  return (
    <SummaryLayout
      standalone={standalone}

      title="Dwang en drang"
      description="Het onderscheid tussen dwang en drang bij vaccinatie."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image03"
    >
      <section id="begrippen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Dwang en drang</h2>
        <p className="text-slate-700 mb-4"><strong>Dwang</strong> betekent dat iemand verplicht wordt tot vaccinatie (bijv. wettelijke plicht). <strong>Drang</strong> is het uitoefenen van druk zonder formele verplichting, zoals toegangsbeperkingen of maatschappelijke druk.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image03DwangEnDrangSummary
