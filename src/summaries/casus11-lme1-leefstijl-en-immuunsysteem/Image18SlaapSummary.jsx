import { Moon } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18SlaapSummary = ({ standalone = true }) => {
  const toc = [{ id: 'slaap', title: 'Slaap en circadiaan ritme', icon: Moon }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Andere leefstijlfactoren (2) – Slaap en circadiaan ritme"
      description="Invloed van slaap en dag-nachtritme op het immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image18"
    >
      <section id="slaap" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slaap en circadiaan ritme</h2>
        <p className="text-slate-700 mb-4">Circadiaan ritme beïnvloedt 30–40% van de genexpressie. Cortisol piekt in de ochtend. Leukocytenmigratie is &apos;s nachts ongeveer twee keer hoger. Vaccinatie in de ochtend geeft bij ouderen een betere respons.</p>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
          <strong>Slaaptekort:</strong> leidt tot laaggradige ontsteking, hoger infectierisico en lagere vaccinatierespons.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18SlaapSummary
