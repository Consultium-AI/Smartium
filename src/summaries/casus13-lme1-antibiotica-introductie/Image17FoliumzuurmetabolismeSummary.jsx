import { Beaker } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17FoliumzuurmetabolismeSummary = () => {
  const toc = [{ id: 'foliumzuur', title: 'Remmers van foliumzuurmetabolisme', icon: Beaker }]
  return (
    <SummaryLayout
      title="Remmers van foliumzuurmetabolisme"
      description="Cotrimoxazol en trimethoprim – indicaties en bijwerkingen."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image17"
    >
      <section id="foliumzuur" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Remmers van foliumzuurmetabolisme</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De derde groep zijn antibiotica die de foliumzuursynthese remmen. In deze groep valt ook trimethoprim (eerder besproken bij nitrofurantoïne). Cotrimoxazol is een combinatie van sulfamethoxazol en trimethoprim (dus 2 antibiotica).
        </p>
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mb-4">
          <h4 className="font-bold text-primary-800 mb-2">Cotrimoxazol – Indicaties</h4>
          <p className="text-primary-700 text-sm">Infecties door ESBL- of AMP-C producerende bacteriën kunnen behandeld worden met cotrimoxazol, indien bewezen gevoelig. Cotrimoxazol dekt geen <em>Pseudomonas aeruginosa</em>.</p>
        </div>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-4">
          <h4 className="font-bold text-amber-800 mb-2">Belangrijke bijwerkingen</h4>
          <p className="text-amber-700 text-sm">Rash (en ernstigere huidafwijkingen), pancytopenie, nierinsufficiëntie. Geen tendinitis (dat heeft ciprofloxacin).</p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-2">Contra-indicatie</h4>
          <p className="text-red-700 text-sm">Vitamine K-antagonisten zijn gecontra-indiceerd omdat cotrimoxazol de instelling van vitamine K-antagonisten onvoorspelbaar beïnvloedt.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17FoliumzuurmetabolismeSummary
