import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09BetalactamResistentieSummary = () => {
  const toc = [{ id: 'betalactam-res', title: 'Resistentie voor beta-lactam antibiotica', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Resistentie voor beta-lactam antibiotica"
      description="Vier groepen verworven resistentie met voorbeelden."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image09"
    >
      <section id="betalactam-res" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Resistentie voor beta-lactam antibiotica</h2>
        <p className="text-slate-700 mb-4">Verworven resistentie voor beta-lactam antibiotica kan in 4 groepen worden ingedeeld:</p>
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Onwerkzaam maken:</strong> eenvoudige beta-lactamasen (penicillinase, rembaar door clavulaanzuur), ESBL (penicillinen en cefalosporinen), carbapenemase (penicillinen, cefalosporinen en carbapenems)
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Doeleiwit veranderen:</strong> modificatie van penicilline-bindend eiwit (PBP)
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Uitpompen:</strong> upregulatie van effluxpompen
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <strong>Opname remmen:</strong> modificatie van porine in de buitenmembraan
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09BetalactamResistentieSummary
