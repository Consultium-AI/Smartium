import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11MRSASummary = () => {
  const toc = [{ id: 'mrsa', title: 'MRSA', icon: AlertCircle }]
  return (
    <SummaryLayout
      title="MRSA"
      description="Definitie en mechanisme van methicilline-resistente Staphylococcus aureus."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image11"
    >
      <section id="mrsa" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">MRSA</h2>
        <p className="text-slate-700 mb-4">Een S. aureus die zijn PBP2 heeft gemodificeerd naar PBP2a noemen we een MRSA (meticilline-resistente S. aureus). Deze isolaten zijn resistent voor alle beta-lactam antibiotica.</p>
        <p className="text-slate-700 mb-4">De modificatie van PBP2 naar PBP2a is het resultaat van transformatie, waarbij DNA uit een andere bacterie is ingebouwd in het chromosoom van S. aureus. Onder druk van antibiotica heeft deze bacterie zich weten te selecteren en is wereldwijd verspreid.</p>
        <p className="text-slate-700 mb-4">S. aureus kan op twee manieren resistent worden voor beta-lactam antibiotica:</p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li><strong>Penicillinase:</strong> resistentie voor penicilline en amoxicilline (rembaar door clavulaanzuur); behandeling mogelijk met flucloxacilline, cefalosporinen en carbapenems.</li>
          <li><strong>PBP2a-gen:</strong> resistentie voor alle beta-lactam antibiotica → MRSA.</li>
        </ol>
      </section>
    </SummaryLayout>
  )
}

export default Image11MRSASummary
