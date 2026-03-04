import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05DiscoveryVoidSummary = () => {
  const toc = [{ id: 'void', title: 'Discovery void', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Geschiedenis – Discovery void"
      description="De periode na 1987 waarin geen nieuwe klassen antibiotica zijn ontdekt."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image05"
    >
      <section id="void" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Discovery void</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Na de ontdekking van penicilline volgden meer ontdekkingen van stoffen afgescheiden door schimmels of bacteriën die groei van bacteriën remden. Later kwamen nieuwe antibiotica op de markt die geheel synthetisch gemaakt werden.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Na 1987 stopte dit. Sindsdien zijn er geen nieuwe klassen antibiotica meer op de markt gekomen. Alleen modificaties van bekende antibiotica verschenen op de markt. Dit noemen we de <strong>discovery void</strong>.
        </p>
        <p className="text-slate-700 mb-2">Antibioticaklassen die vóór 1987 ontdekt werden:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Sulfa drugs, β-lactams, chloramphenicol, tetracyclines</li>
          <li>Aminoglycosiden, macroliden, glycopeptiden, mutillines</li>
          <li>Chinolonen, streptogramines, lipopeptiden, oxazolidinonen</li>
        </ul>
        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-700">
          <strong>Bron:</strong> Fischbach and Walsh, 2009.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05DiscoveryVoidSummary
