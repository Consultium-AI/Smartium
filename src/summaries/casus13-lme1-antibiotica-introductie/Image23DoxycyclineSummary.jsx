import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23DoxycyclineSummary = () => {
  const toc = [{ id: 'doxy', title: 'Doxycycline (30S)', icon: Pill }]
  return (
    <SummaryLayout
      title="Doxycycline"
      description="Tetracycline – 30S-ribosomaal subunit, indicaties en bijwerkingen."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image23"
    >
      <section id="doxy" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Doxycycline (tetracycline)</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Doxycycline bindt aan het 30S-ribosomale subunit en remt daarmee de bacteriële eiwitsynthese. Het behoort tot de tetracyclines.
        </p>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-4">
          <h4 className="font-bold text-amber-800 mb-2">Belangrijke bijwerking</h4>
          <p className="text-amber-700 text-sm">Verkleuring van tanden en remming van botgroei bij kinderen – daarom gecontra-indiceerd bij zwangerschap en kinderen &lt; 8 jaar.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image23DoxycyclineSummary
