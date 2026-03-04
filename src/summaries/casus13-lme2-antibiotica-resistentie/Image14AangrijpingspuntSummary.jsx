import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14AangrijpingspuntSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'aangrijpingspunt', title: 'Aangrijpingspunt aanpassen', icon: Target },
    { id: 'ribosoom', title: 'Verandering in het ribosoom', icon: Target },
    { id: 'mrsa', title: 'MRSA en PBP', icon: Target },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Aangrijpingspunt aanpassen"
      description="Resistentiemechanisme: verandering van het doelwit waarop het antibioticum bindt."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image14"
    >
      <section id="aangrijpingspunt" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Aangrijpingspunt aanpassen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het laatste resistentiemechanisme is de verandering van het aangrijpingspunt waarop het antibioticum normaal gesproken bindt bij de bacterie. Voorbeelden: een verandering in het ribosoom en S. aureus.
        </p>
      </section>
      <section id="ribosoom" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Verandering in het ribosoom</h2>
        <p className="text-slate-700 leading-relaxed">
          Wanneer een verandering optreedt in het bacterieel ribosoom, kan het antibioticum niet meer aanhechten. Dit is bijvoorbeeld het geval bij macroliden.
        </p>
      </section>
      <section id="mrsa" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">S. aureus en MRSA</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Wanneer S. aureus het MecA-gen verwerft, spreken we van MRSA. Er treedt dan een verandering op in het Penicilline Binding Proteïne (PBP). Dan kunnen alle bètalactam-antibiotica niet meer binden aan dit PBP, waardoor de bacterie resistent is.
        </p>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700">
          <strong>PBP:</strong> Het gewijzigde PBP heeft een andere structuur, waardoor bètalactam-antibiotica (penicillines, cefalosporines) niet meer kunnen binden.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14AangrijpingspuntSummary
