import { Flame } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08InflammagingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'inflammaging', title: 'Inflammaging en accelerated aging', icon: Flame }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Inflammaging (1)"
      description="Systemische, chronische, steriele, laaggradige ontsteking bij ouderen."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image08"
    >
      <section id="inflammaging" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Inflammaging</h2>
        <p className="text-slate-700 mb-4">Inflammaging is een systemische, chronische, steriele, laaggradige ontsteking bij ouderen. Het is meetbaar via verhoogde CRP en IL-6.</p>
        <h3 className="font-bold text-slate-800 mb-2">Accelerated aging</h3>
        <p className="text-slate-700 mb-2">Veroudering kan worden versneld door een combinatie van factoren:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Inflammaging</li>
          <li>Oxidatieve stress</li>
          <li>Telomeerverkorting</li>
          <li>DNA-schade</li>
          <li>Cellulaire senescentie</li>
          <li>Verminderde autofagie</li>
          <li>Immunosenescence</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image08InflammagingSummary
