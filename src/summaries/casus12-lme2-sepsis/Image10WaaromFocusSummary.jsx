import { Search } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10WaaromFocusSummary = () => {
  const toc = [{ id: 'waarom', title: 'Waarom infectiefocus identificeren?', icon: Search }]
  return (
    <SummaryLayout
      title="Waarom is het belangrijk het infectiefocus te identificeren?"
      description="Focuscontrole, empirische antibiotica, diagnostiek en behandelduur."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image10"
    >
      <section id="waarom" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Infectiefocus</h2>
        <p className="text-slate-700 mb-4">Met infectiefocus bedoelen we de bron (de locatie) van de infectie.</p>
        <h3 className="font-bold text-slate-800 mb-2">Vier redenen om de focus te identificeren</h3>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>1. Focuscontrole:</strong> Het beheersen en elimineren van de infectiebron (bijv. abcesdrainage, chirurgische interventie bij perforatie). Bij een abdominale infectie door perforatie is antibiotische therapie alleen niet voldoende zonder chirurgische correctie.
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>2. Empirische antibiotica keuze:</strong> Kennis van de focus helpt bij het kiezen van effectieve antibiotica met breed spectrum en goede penetratie (bijv. CNS bij abdominaal, vooral gram-negatief bij UWI). Antibiotica moeten intraveneus worden gegeven voor voldoende bloedspiegel.
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>3. Diagnostiek:</strong> Bloedkweken moeten altijd vóór start antibiotica worden afgenomen. Op basis van de vermoedelijke focus: urine-, sputum- en pus-kweken. Aanvullend beeldvorming (X-thorax, CT-abdomen) kan geïndiceerd zijn.
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <strong>4. Duur van de behandeling:</strong> Varieert per focus, respons en succesvolle focuscontrole. Sepsis zonder focus: 7 dagen. Langere therapie bij endocarditis of spondylodiscitis; kortere bij pneumonie, huid- of urineweginfectie. Beslissingen vaak in overleg met arts-microbioloog of internist-infectioloog.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10WaaromFocusSummary
