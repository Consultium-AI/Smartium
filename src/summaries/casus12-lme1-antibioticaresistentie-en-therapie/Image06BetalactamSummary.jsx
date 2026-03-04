import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06BetalactamSummary = ({ standalone = true }) => {
  const toc = [{ id: 'betalactam', title: 'Beta-lactam antibiotica', icon: Pill }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Beta-lactam antibiotica"
      description="Voorbeelden van beta-lactam antibiotica: penicillinen, cefalosporinen en carbapenems."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image06"
    >
      <section id="betalactam" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Beta-lactam antibiotica</h2>
        <p className="text-slate-700 mb-4">Tot de beta-lactam antibiotica behoren:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Penicillinen:</strong> flucloxacilline; Augmentin (amoxicilline + clavulaanzuur, een beta-lactamaseremmer)</li>
          <li><strong>Cefalosporinen:</strong> ceftriaxon</li>
          <li><strong>Carbapenems:</strong> meropenem</li>
        </ul>
        <p className="text-slate-700 mt-4 text-sm">Erytromycine, clindamycine, metronidazol en vancomycine vallen niet onder de beta-lactam antibiotica.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image06BetalactamSummary
